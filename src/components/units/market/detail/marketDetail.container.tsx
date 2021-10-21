//@ts-nocheck
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductDetailUI from "./marketDetail.presenter";
import { Modal } from "antd";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  FETCH_USEDITEMS_I_PICKED,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USEDITEM_PICK,
} from "./marketDetail.queries";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MarketDetail() {
  const [isModal, setIsModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const [deleteUseditem] = useMutation(DELETE_USEDITEM);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const router = useRouter();

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.id },
  });

  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);

  const marketSeller = data?.fetchUseditem.seller?._id;
  const loggedInUser = userData?.fetchUserLoggedIn._id;

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=fe853892c0427192f5e132563ab9f6aa&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.

        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            data?.fetchUseditem.useditemAddress?.lat,
            data?.fetchUseditem.useditemAddress?.lng
          ), // 지도의 중심좌표.
          level: 5, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          data?.fetchUseditem.useditemAddress?.lat,
          data?.fetchUseditem.useditemAddress?.lng
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          data?.fetchUseditem.useditemAddress?.address,
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다

              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="width:200px;text-align:center;padding:6px 0;">${data?.fetchUseditem.useditemAddress?.address}</div>`,
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
        marker.setMap(map);
      });
    };
  });

  //@ts-ignore
  const onClickToggle = (event) => {
    try {
      toggleUseditemPick({
        variables: {
          useditemId: router.query.id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
            variables: { useditemId: router.query.id },
          },
        ],

        // 토글 데이터 제대로 작동하면 주석 풀고 완성해서 optimisticResponse 작동시키기

        // optimisticResponse: {
        //   toggleUseditemPick: pickedCount + 1,
        // },

        // update(cache, { data }) {
        //   cache.writeQuery({
        //     query: FETCH_USEDITEM,
        //     variables: { useditemId: router.query.id },
        //     data: {
        //       fetchUseditem: {
        //         _id: data.fetchUseitem.id,
        //         __typename: "board",
        //         pickedCount: data.toggleUseditemPick,
        //       },
        //     },
        //   });
        // },
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickList = () => {
    router.push("/market/list");
  };

  const onClickEdit = () => {
    router.push(`/market/detail/${router.query.id}/edit`);
    // router.push(`/detail/${router.query.id}/edit/`);
  };

  const onClickDelete = () => {
    setIsModal(true);
    setIsOpen(true);
  };

  const onClickOk = async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: router.query.id,
        },
      });
      Modal.info({ content: "게시글이 삭제되었습니다." });
      router.push("/market/list");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickCancel = () => {
    setIsOpen(false);
  };

  const onClickBuyItem = () => {
    setIsOpen(true);
  };

  const onClickBuyItemOk = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.id,
        },
      });
      router.push("/market/list");
      Modal.info({ content: "상품구매가 완료되었습니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <ProductDetailUI
      data={data}
      onClickToggle={onClickToggle}
      onClickList={onClickList}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      onClickOk={onClickOk}
      onClickCancel={onClickCancel}
      isModal={isModal}
      isOpen={isOpen}
      marketSeller={marketSeller}
      loggedInUser={loggedInUser}
      onClickBuyItem={onClickBuyItem}
      onClickBuyItemOk={onClickBuyItemOk}
    />
  );
}
