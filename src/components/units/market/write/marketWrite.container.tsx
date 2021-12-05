import { useForm } from "react-hook-form";
import MarketWriteUI from "./marketWrite.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USEDITEM,
  UPDATE_USEDITEM,
  UPLOAD_FILE,
} from "./marketWrite.queries";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { FETCH_USEDITEM } from "../detail/marketDetail.queries";
import { useEffect, useState } from "react";
import { IMutation } from "../../../../commons/typs/generated/types";

const schema = yup.object().shape({
  productName: yup.string().required("상품명을 입력하세요"),
  productCharacter: yup.string().required("상품의 특징을 입력해주세요"),
  productExplanation: yup.string().required("상품의 설명을 입력해주세요"),
  // .min(30, "30자 이상 입력해주세요"),
  price: yup
    .number()
    .typeError("가격은 숫자로 입력해 주세요")
    .required("상품의 가격을 입력해주세요"),
  tags: yup.string(),
  address: yup.string(),
  addressDetail: yup.string().required("상세주소를 입력하세요"),
});

declare const window: typeof globalThis & {
  kakao: any;
};
interface IProps {
  isEdit: boolean;
  data: {
    data: string;
    fetchUseditem: {
      fetchUseditem: string;
      name: string;
      remarks: string;
      contents: string;
      price: number;
      tags: string;
      useditemAddress: {
        useditemAddress: string;
        address: string;
        addressDetail: string;
        lat: string;
        lng: string;
      };
    };
  };
}

export default function MarketWrite(props: IProps) {
  const router = useRouter();
  const [createUseditem] = useMutation<IMutation>(CREATE_USEDITEM);
  const [updateUseditem] = useMutation<IMutation>(UPDATE_USEDITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [imageFile, setImageFile] = useState<string[]>([]);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [address, setAddress] = useState<string>(
    props.data?.fetchUseditem.useditemAddress.address || ""
  );
  const [lat, setLat] = useState<string>();
  const [lng, setLng] = useState<string>();

  const [addressDetail, setAddressDetail] = useState<string>(
    props.data?.fetchUseditem.useditemAddress.addressDetail || ""
  );
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.id },
  });

  useEffect(() => {
    setAddress(
      props.data?.fetchUseditem.useditemAddress?.address
        ? props.data?.fetchUseditem.useditemAddress?.address
        : ""
    );
    setAddressDetail(
      props.data?.fetchUseditem.useditemAddress?.addressDetail
        ? props.data?.fetchUseditem.useditemAddress?.addressDetail
        : ""
    );
  }, [props.data]);

  useEffect(() => {
    if (props.data) {
      setValue("productName", props.data?.fetchUseditem.name);
      setValue("productCharacter", props.data?.fetchUseditem.remarks);
      setValue("productExplanation", props.data?.fetchUseditem.contents);
      setValue("price", props.data?.fetchUseditem.price);
      setValue("tags", props.data?.fetchUseditem.tags);
      setValue("address", props.data?.fetchUseditem.useditemAddress?.address);
      setValue(
        "addressDetail",
        props.data?.fetchUseditem.useditemAddress?.addressDetail
      );
    }
  }, [props.data]);

  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  async function onSubmit(data: {
    data: string;
    productName: string;
    productCharacter: string;
    productExplanation: string;
    price: number;
    tags: string;
    addressDetail: string;
  }) {
    try {
      const resultFiles = await Promise.all(
        imageFile.map((fileData) =>
          uploadFile({ variables: { file: fileData } })
        )
      );

      const finalUrl = resultFiles.map(
        (resultUrl) => resultUrl.data.uploadFile.url
      );

      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.productName,
            remarks: data.productCharacter,
            contents: data.productExplanation,
            price: data.price,
            tags: data.tags,
            images: finalUrl,
            useditemAddress: {
              address: address,
              addressDetail: data.addressDetail,
              lat: lat,
              lng: lng,
            },
          },
        },
      });
      Modal.info({ content: "게시물이 등록되었습니다." });
      router.push(`./detail/${result.data?.createUseditem._id}`);
    } catch (error: unknown | any) {
      Modal.error({ content: error.message });
    }
  }

  const onEdit = async (data: {
    data: string;
    address: string;
    addressDetail: string;
    productName: string;
    productCharacter: string;
    productExplanation: string;
    price: number;
    tags: string;
  }) => {
    try {
      const resultFiles = await Promise.all(
        imageFile.map((fileData) =>
          uploadFile({ variables: { file: fileData } })
        )
      );

      const finalUrl = resultFiles.map(
        (resultUrl) => resultUrl.data.uploadFile.url
      );

      const { address, addressDetail, ...rest } = data;

      const result = await updateUseditem({
        variables: {
          useditemId: router.query.id,
          updateUseditemInput: {
            name: data.productName,
            remarks: data.productCharacter,
            contents: data.productExplanation,
            price: data.price,
            tags: data.tags,
            images: finalUrl,
            useditemAddress: {
              address: address,
              addressDetail: data.addressDetail,
              lat: lat,
              lng: lng,
            },
          },
        },
      });
      Modal.info({ content: "게시글이 수정되었습니다." });
      router.push(`/market/detail/${result.data?.updateUseditem._id}`);
    } catch (error: unknown | any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickSearchAddress = () => {
    setIsModal(true);
  };

  const onClickCancel = () => {
    setIsModal(false);
  };

  const onChangeAddress = (data: string) => {
    setAddress(data);
  };

  const onComplete = (data: { data: string; address: string }) => {
    setAddress(data.address);
    setValue("address", data.address);
    trigger("address");
    setIsModal(false);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=fe853892c0427192f5e132563ab9f6aa&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.

        const mapContainer = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const mapOption = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            props.data?.fetchUseditem.useditemAddress.lat
              ? props.data?.fetchUseditem.useditemAddress.lat
              : 37.577948,
            props.data?.fetchUseditem.useditemAddress.lng
              ? props.data?.fetchUseditem.useditemAddress.lng
              : 126.976781
          ), // 지도의 중심좌표.
          level: 5, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도 생성 및 객체 리턴

        // // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          props.data?.fetchUseditem.useditemAddress.lat
            ? props.data?.fetchUseditem.useditemAddress.lat
            : 37.577948,
          props.data?.fetchUseditem.useditemAddress.lng
            ? props.data?.fetchUseditem.useditemAddress.lng
            : 126.976781
        );

        // // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(
          props.data?.fetchUseditem.useditemAddress.address === address
            ? props.data?.fetchUseditem.useditemAddress.address
            : address,
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              setLng(coords.La);
              setLat(coords.Ma);

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });
              console.log(marker);

              map.setCenter(coords);
            }
          }
        );

        marker.setMap(map);
      });
    };
  }, [address, props.data]);

  console.log("주소", address);
  return (
    <MarketWriteUI
      handleSubmit={handleSubmit}
      register={register}
      onSubmit={onSubmit}
      onEdit={onEdit}
      errors={formState.errors}
      isActive={formState.isValid}
      isEdit={props.isEdit}
      data={data}
      setImageFile={setImageFile}
      onClickSearchAddress={onClickSearchAddress}
      isModal={isModal}
      onClickCancel={onClickCancel}
      onComplete={onComplete}
      address={address}
      onChangeAddress={onChangeAddress}
    />
  );
}
