//@ts-nocheck

import BoardWriteUI from "./boardWrite.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./boardWrite.queries";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function BoardWrite(props) {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [imageFile, setImageFile] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");

  const router = useRouter();

  const schema = yup.object().shape({
    writer: yup.string().required("이름을 입력하세요"),
    password: yup.string().required("비밀번호를 입력해주세요"),
    title: yup.string().required("제목을 입력해주세요"),
    contents: yup.string().required("내용을 입력해주세요"),
    youtubeUr: yup.string(),
    zipCode: yup.string(),
    address: yup.string(),
    addressDetail: yup.string(),
  });

  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setAddress(
      props.data?.fetchBoard.boardAddress.address
        ? props.data?.fetchBoard.boardAddress.address
        : ""
    );
    setZipCode(
      props.data?.fetchBoard.boardAddress.zipcode
        ? props.data?.fetchBoard.boardAddress.zipcode
        : ""
    );
  }, [props.data]);

  useEffect(() => {
    if (props.data) {
      setValue("writer", props.data?.fetchBoard.writer);
      setValue("title", props.data?.fetchBoard.title);
      setValue("contents", props.data?.fetchBoard.contents);
      setValue("youtubeUrl", props.data?.fetchBoard.youtubeUrl);
      setValue("zipCode", props.data?.fetchBoard.boardAddress.zipcode);
      setValue("address", props.data?.fetchBoard.boardAddress.address);
      setValue(
        "addressDetail",
        props.data?.fetchBoard.boardAddress.addressDetail
      );
    }
  }, [props.data, setValue]);

  const onSubmit = async (data) => {
    try {
      const resultFiles = await Promise.all(
        imageFile.map((fileData) =>
          uploadFile({ variables: { file: fileData } })
        )
      );

      const finalUrl = resultFiles.map(
        (resultUrl) => resultUrl.data.uploadFile.url
      );

      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            title: data.title,
            password: data.password,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
            images: finalUrl,
            boardAddress: {
              zipcode: zipCode,
              address: address,
              addressDetail: data.addressDetail,
            },
          },
        },
      });
      Modal.info({ content: "게시글을 등록합니다." });
      router.push(`/board/detail/${result.data?.createBoard._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onEdit = async (data) => {
    try {
      const resultFiles = await Promise.all(
        imageFile.map((fileData) =>
          uploadFile({ variables: { file: fileData } })
        )
      );

      const finalUrl = resultFiles.map(
        (resultUrl) => resultUrl.data.uploadFile.url
      );

      const result = await updateBoard({
        variables: {
          boardId: router.query.Id,
          password: data.password,
          updateBoardInput: {
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
            images: finalUrl,
            boardAddress: {
              zipcode: zipCode,
              address: address,
              addressDetail: data.addressDetail,
            },
          },
        },
      });
      Modal.info({ content: "게시글이 수정되었습니다." });
      router.push(`/board/detail/${result.data?.updateBoard._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClicksearchAdress = () => {
    setIsModal(true);
  };

  const onClickCancel = () => {
    setIsModal(false);
  };

  const onComplete = (data) => {
    setAddress(data.address);
    setZipCode(data.zonecode);
  };

  return (
    <BoardWriteUI
      handleSubmit={handleSubmit}
      register={register}
      errors={formState.errors}
      onSubmit={onSubmit}
      isActive={formState.isValid}
      setImageFile={setImageFile}
      isEdit={props.isEdit}
      onEdit={onEdit}
      onClicksearchAdress={onClicksearchAdress}
      isModal={isModal}
      onClickCancel={onClickCancel}
      onComplete={onComplete}
      address={address}
      zipCode={zipCode}
      data={props.data}
    />
  );
}
