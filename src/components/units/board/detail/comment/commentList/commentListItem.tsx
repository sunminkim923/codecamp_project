//@ts-nocheck
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import CommentWrite from "../commentWrite/commentWrite.container";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./commentList.queries";
import {
  Wrapper,
  HeadWrapper,
  PofileImg,
  ContentsWrapper,
  TopWrapper,
  WriterWrapper,
  WriterName,
  StarPoint,
  ButtonWrapper,
  EditButton,
  DeleteButton,
  Contents,
  CreateDate,
  UnderLine,
  ModalInputWrapper,
} from "./commentList.styles";

export default function CommentListItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [onCancel, setOnCancel] = useState(false);
  const [onOk, setOnOk] = useState(false);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const router = useRouter();

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickDelete = () => {
    setIsModal(true);
    setIsOpen(true);
  };

  const onClickCancel = () => {
    setIsOpen(false);
  };

  const onClickOk = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password: password,
          boardCommentId: props.data._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.Id },
          },
        ],
      });
      setIsOpen(false);
      alert("댓글이 삭제되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangePassword = (event: ChangeEvent) => {
    setPassword(event.target.value);
  };

  return (
    <Wrapper key={props.data._id}>
      <HeadWrapper>
        <PofileImg src="/images/profile.svg/" />
        <ContentsWrapper>
          <TopWrapper>
            <WriterWrapper>
              <WriterName>{props.data?.writer}</WriterName>
              <StarPoint value={props.data.rating} />
            </WriterWrapper>
            <ButtonWrapper>
              <EditButton
                src="/images/commentEdit.svg/"
                onClick={onClickEdit}
              />
              <DeleteButton
                src="/images/commentDelete.svg/"
                onClick={onClickDelete}
              />
              {isModal && (
                <Modal
                  title="댓글삭제"
                  visible={isOpen}
                  onCancel={onClickCancel}
                  onOk={onClickOk}
                >
                  <ModalInputWrapper>
                    <div>비밀번호를 입력해주세요.</div>
                    <input type="password" onChange={onChangePassword} />
                  </ModalInputWrapper>
                </Modal>
              )}
            </ButtonWrapper>
          </TopWrapper>
          <Contents>{props.data?.contents}</Contents>
        </ContentsWrapper>
      </HeadWrapper>
      <CreateDate>{props.data?.createdAt}</CreateDate>
      {isEdit && (
        <CommentWrite isEdit={isEdit} data={props.data} setIsEdit={setIsEdit} />
      )}
      <UnderLine />
    </Wrapper>
  );
}
