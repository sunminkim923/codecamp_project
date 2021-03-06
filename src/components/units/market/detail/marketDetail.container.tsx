import {
  DocumentNode,
  OperationVariables,
  useMutation,
  useQuery,
} from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductDetailUI from "./marketDetail.presenter";
import { Modal } from "antd";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USEDITEM_PICK,
} from "./marketDetail.queries";
import { User } from "@sentry/types";

declare const window: typeof globalThis & {
  kakao: any;
};

export interface IQueryData {
  useditemId: string | string[] | undefined;
  fetchUseditem: {
    createdAt: number | any;
    useditemAddress: {
      useditemAddress: string;
      addressDetail: string;
      address: string;
      lat: string;
      lng: string;
    };
    remarks: string;
    name: string;
    pickedCount: number;
    price: number;
    contents: any;
    tags: string;
    images: string[];

    seller: {
      seller: string;
      name: string;
      _id: string;
    };
  };
}

export interface IQueryUserData {
  FETCH_USER_LOGGED_IN: DocumentNode;
  fetchUserLoggedIn: {
    fetchUserLoggedIn: User;
    _id: string;
  };
}

export default function MarketDetail() {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [toggleUseditemPick] = useMutation<any, OperationVariables>(
    TOGGLE_USEDITEM_PICK
  );
  const [deleteUseditem] = useMutation<any, OperationVariables>(
    DELETE_USEDITEM
  );
  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    any,
    OperationVariables
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);
  const router = useRouter();

  const { data } = useQuery<IQueryData>(FETCH_USEDITEM, {
    variables: { useditemId: router.query.id },
  });

  const { data: userData } = useQuery<IQueryUserData>(FETCH_USER_LOGGED_IN);

  const marketSeller = data?.fetchUseditem?.seller?._id;
  const loggedInUser = userData?.fetchUserLoggedIn._id;

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=fe853892c0427192f5e132563ab9f6aa&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        // v3??? ?????? ????????? ???, ??? ?????? ????????? ???????????????.

        const container = document.getElementById("map"); // ????????? ?????? ????????? DOM ????????????
        const options = {
          // ????????? ????????? ??? ????????? ?????? ??????
          center: new window.kakao.maps.LatLng(
            data?.fetchUseditem.useditemAddress?.lat,
            data?.fetchUseditem.useditemAddress?.lng
          ), // ????????? ????????????.
          level: 5, // ????????? ??????(??????, ?????? ??????)
        };

        const map = new window.kakao.maps.Map(container, options); // ?????? ?????? ??? ?????? ??????

        // ????????? ????????? ???????????????
        const markerPosition = new window.kakao.maps.LatLng(
          data?.fetchUseditem.useditemAddress?.lat,
          data?.fetchUseditem.useditemAddress?.lng
        );

        // ????????? ???????????????
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // ??????-?????? ?????? ????????? ???????????????
        const geocoder = new window.kakao.maps.services.Geocoder();

        // ????????? ????????? ???????????????
        geocoder.addressSearch(
          data?.fetchUseditem.useditemAddress?.address,
          function (result: any, status: any) {
            // ??????????????? ????????? ???????????????
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // ??????????????? ?????? ????????? ????????? ???????????????
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // ?????????????????? ????????? ?????? ????????? ???????????????
              const infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="width:200px;text-align:center;padding:6px 0;">${data?.fetchUseditem.useditemAddress?.address}</div>`,
              });
              infowindow.open(map, marker);

              // ????????? ????????? ??????????????? ?????? ????????? ??????????????????
              map.setCenter(coords);
            }
          }
        );
        marker.setMap(map);
      });
    };
  });

  const onClickToggle = () => {
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

        // ?????? ????????? ????????? ???????????? ?????? ?????? ???????????? optimisticResponse ???????????????

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
    } catch (error: unknown | any) {
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
      Modal.info({ content: "???????????? ?????????????????????." });
      router.push("/market/list");
    } catch (error: unknown | any) {
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
      Modal.info({ content: "??????????????? ?????????????????????." });
    } catch (error: unknown | any) {
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
