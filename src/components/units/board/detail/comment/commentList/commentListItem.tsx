import { OperationVariables, useMutation } from "@apollo/client";
import { Modal, Tooltip } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import CommentWrite from "../commentWrite/commentWrite.container";
import { getDate } from "../../../../../../commons/libraries/utils";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./commentList.queries";
import {
  Wrapper,
  HeadWrapper,
  ProfileIcon,
  ContentsWrapper,
  TopWrapper,
  WriterWrapper,
  WriterName,
  StarPoint,
  ButtonWrapper,
  Contents,
  CreateDate,
  UnderLine,
  ModalInputWrapper,
  EditIcon,
  DeleteIcon,
} from "./commentList.styles";

interface IProps {
  data: string | any;
}

export default function CommentListItem(props: IProps) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [deleteBoardComment] = useMutation<any, OperationVariables>(
    DELETE_BOARD_COMMENT
  );

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
    } catch (error: unknown | any) {
      alert(error.message);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickExit = () => {
    setIsEdit(false);
  };

  return (
    <Wrapper key={props.data._id}>
      <HeadWrapper>
        <ProfileIcon />
        <ContentsWrapper>
          <TopWrapper>
            <WriterWrapper>
              <WriterName>{props.data?.writer}</WriterName>
              <StarPoint value={props.data.rating} />
            </WriterWrapper>
            <ButtonWrapper>
              <Tooltip placement="top" title="수정하기">
                <EditIcon onClick={onClickEdit} />
              </Tooltip>
              <Tooltip placement="top" title="삭제하기">
                <DeleteIcon onClick={onClickDelete} />
              </Tooltip>

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
      <CreateDate>{getDate(props.data?.createdAt)}</CreateDate>
      {isEdit && (
        <CommentWrite
          isEdit={isEdit}
          data={props.data}
          setIsEdit={setIsEdit}
          onClickExit={onClickExit}
        />
      )}
      <UnderLine />
    </Wrapper>
  );
}
