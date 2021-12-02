import { useForm } from "react-hook-form";
import CommentWriteUI from "./commentWrite.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { OperationVariables, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  CREATE_BAORD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./commentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../commentList/commentList.queries";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Modal } from "antd";

interface IProps {
  isEdit: boolean;
  data: any;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  onClickExit: () => void;
}

export interface IonSubmitData {
  data: string;
  writer: string;
  password: string;
  contents: string;
}

export interface IonEditData {
  data: string;
  contents: string;
  password: string;
}

export default function CommentWrite(props: IProps) {
  const [createBoardComment] = useMutation<any, OperationVariables>(
    CREATE_BAORD_COMMENT
  );
  const [updateBoardComment] = useMutation<any, OperationVariables>(
    UPDATE_BOARD_COMMENT
  );
  const router = useRouter();
  const [inputWriter, setInputWriter] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [inputContents, setInputContents] = useState<string>("");
  const [inputRating, setInputRating] = useState<number>(0);
  const [commentLength, setCommentLength] = useState<number>(0);

  const onChangeInputWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setInputWriter(event.target.value);
  };

  const onChangeInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setInputPassword(event.target.value);
  };

  const onChangeInPutContents = (event: ChangeEvent<HTMLInputElement>) => {
    setInputContents(event.target.value);
    setCommentLength(event.target.value.length);
  };

  const onChangeRating = (event: any) => {
    setInputRating(event);
  };

  const schema = yup.object().shape({
    writer: yup.string().required("이름을 입력해주세요"),
    password: yup.string().required("비밀번호를 입력해주세요"),
    contents: yup.string().required("내용을 입력해주세요"),
  });

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IonSubmitData) => {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: data.writer,
            password: data.password,
            contents: data.contents,
            rating: inputRating,
          },
          boardId: router.query.Id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.Id },
          },
        ],
      });

      alert("댓글을 등록합니다.");
      setInputWriter("");
      setInputPassword("");
      setInputContents("");
      setInputRating(0);
    } catch (error: unknown | any) {
      alert(error.message);
    }
  };

  const onEdit = async (data: IonEditData) => {
    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: data.contents,
            rating: inputRating,
          },
          password: data.password,
          boardCommentId: props.data._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.Id },
          },
        ],
      });
      props.setIsEdit(false);
      Modal.info({ content: "댓글을 수정합니다." });
    } catch (error: unknown | any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <CommentWriteUI
      handleSubmit={handleSubmit}
      register={register}
      onSubmit={onSubmit}
      inputWriter={inputWriter}
      onChangeInputWriter={onChangeInputWriter}
      onChangeInputPassword={onChangeInputPassword}
      onChangeInPutContents={onChangeInPutContents}
      onChangeRating={onChangeRating}
      inputPassword={inputPassword}
      inputContents={inputContents}
      inputRating={inputRating}
      isEdit={props.isEdit}
      onEdit={onEdit}
      data={props.data}
      commentLength={commentLength}
      onClickExit={props.onClickExit}
    />
  );
}
