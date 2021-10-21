// @ts-nocheck
import { useForm } from "react-hook-form";
import CommentWriteUI from "./commentWrite.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  CREATE_BAORD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./commentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../commentList/commentList.queries";
import { useState } from "react";
import { Modal } from "antd";

export default function CommentWrite(props) {
  const [createBoardComment] = useMutation(CREATE_BAORD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const router = useRouter();
  const [inputWriter, setInputWriter] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputContents, setInputContents] = useState("");
  const [inputRating, setInputRating] = useState(0);
  const [commentLength, setCommentLength] = useState(0);
  //@ts-ignore
  const onChangeInputWriter = (event) => {
    setInputWriter(event.target.value);
  };

  const onChangeInputPassword = (event) => {
    setInputPassword(event.target.value);
  };

  const onChangeInPutContents = (event) => {
    setInputContents(event.target.value);
    setCommentLength(event.target.value.length);
  };

  const onChangeRating = (event) => {
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

  const onSubmit = async (data) => {
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
    } catch (error) {
      alert(error.message);
    }
  };

  const onEdit = async (data) => {
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
    } catch (error) {
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
    />
  );
}
