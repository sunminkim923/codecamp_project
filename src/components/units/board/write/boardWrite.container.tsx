import BoardWriteUI from "./boardWrite.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, FormState, useForm } from "react-hook-form";
import * as yup from "yup";
import {
  DocumentNode,
  FetchResult,
  MutationFunctionOptions,
  OperationVariables,
  useMutation,
} from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./boardWrite.queries";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IQueryData } from "../../../../../pages/board/detail/[Id]/edit";

export interface IProps {
  isEdit: boolean;
  data: IQueryData | undefined;
}

export interface IOnSubmitData {
  data: string;
  createBoard: (
    options?: MutationFunctionOptions<any, OperationVariables> | undefined
  ) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>;
  writer: string;
  title: string;
  password: string;
  contents: string;
  youtubeUrl: string;
  addressDetail: string;
}

export interface IOnEditData {
  password: string;
  title: string;
  contents: string;
  youtubeUrl: string;
  addressDetail: string;
}

export interface IOnCompleteData {
  address: string;
  zonecode: string;
}

export default function BoardWrite(props: IProps) {
  const [createBoard] = useMutation<any, OperationVariables>(CREATE_BOARD);
  const [uploadFile] = useMutation<any, OperationVariables>(UPLOAD_FILE);
  const [updateBoard] = useMutation<any, OperationVariables>(UPDATE_BOARD);

  const [imageFile, setImageFile] = useState<string[]>([]);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");

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

  const { handleSubmit, register, formState, setValue } = useForm({
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

  const onSubmit = async (data: IOnSubmitData) => {
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
    } catch (error: unknown | any) {
      Modal.error({ content: error.message });
    }
  };

  const onEdit = async (data: IOnEditData) => {
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
    } catch (error: unknown | any) {
      Modal.error({ content: error.message });
    }
  };

  const onClicksearchAdress = () => {
    setIsModal(true);
  };

  const onClickCancel = () => {
    setIsModal(false);
  };

  const onComplete = (data: IOnCompleteData) => {
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
