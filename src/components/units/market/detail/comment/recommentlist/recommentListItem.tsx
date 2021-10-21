import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
  UPDATE_USEDITEM_QUESTION_ANSWER,
} from "./recommentList.queries";
import {
  Wrapper,
  CommentWrapper,
  ArrowImg,
  BodyWrapper,
  ProfileImg,
  ContentsWrapper,
  WriterWrapper,
  WriterName,
  Contents,
  CreatedAt,
  EditButtonWrapper,
  DeleteButton,
  EditButton,
  EditWrapper,
  ExitButtonWrapper,
  ExitButton,
  EditCommentWrapper,
  EditCommentInputWrapper,
  EditInput,
  EditSubmitWrapper,
  EditText,
  EidtSubmitButton,
} from "./recommentList.styles";

export default function ReCommentListItem(props: any) {
  const [isEdit, setIsEdit] = useState(false);
  const [editContents, setEditContents] = useState("");
  const [contentsLength, setContentsLength] = useState(0);
  const [isModal, setIsModal] = useState(false);

  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USEDITEM_QUESTION_ANSWER
  );
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USEDITEM_QUESTION_ANSWER
  );

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEditContents(event.target.value);
    setContentsLength(event.target.value.length);
  };

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickExit = () => {
    setIsEdit(false);
  };

  const onClickDelete = () => {
    setIsModal(true);
  };

  const onClickCancel = () => {
    setIsModal(false);
  };

  const onClickOk = async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.data._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.commentId },
          },
        ],
      });
      Modal.info({ content: "댓글이 삭제되었습니다." });
      setIsModal(false);
    } catch (error) {
      //@ts-ignore
      Modal.error({ content: error.message });
    }
  };

  const onClickSubmit = async () => {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: editContents,
          },
          useditemQuestionAnswerId: props.data._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.commentId },
          },
        ],
      });
      setIsEdit(false);
      Modal.info({ content: "댓글을 수정합니다." });
    } catch (error) {
      //@ts-ignore
      Modal.error({ content: error.message });
    }
  };

  return (
    <Wrapper key={props.data._id}>
      {!isEdit && (
        <div>
          <CommentWrapper>
            <ArrowImg src="/images/arrow_comment.png/" />
            <BodyWrapper>
              <ProfileImg src="/images/profile.svg/" />
              <ContentsWrapper>
                <WriterWrapper>
                  <WriterName>{props.data.user.name}</WriterName>
                  <Contents>{props.data.contents}</Contents>
                </WriterWrapper>
                <EditButtonWrapper>
                  {props.loggedInuser === props.data.user._id && (
                    <EditButton
                      src="/images/commentEdit.svg/"
                      onClick={onClickEdit}
                    />
                  )}

                  {props.loggedInuser === props.data.user._id && (
                    <DeleteButton
                      src="/images/commentDelete.svg"
                      onClick={onClickDelete}
                    />
                  )}
                  {isModal && (
                    <Modal
                      title="댓글 삭제"
                      visible={true}
                      onCancel={onClickCancel}
                      onOk={onClickOk}
                    >
                      댓글을 삭제하시겠습니까?
                    </Modal>
                  )}
                </EditButtonWrapper>
              </ContentsWrapper>
            </BodyWrapper>
          </CommentWrapper>
          <CreatedAt>{props.data.createdAt}</CreatedAt>
        </div>
      )}
      {isEdit && (
        <EditWrapper>
          <ExitButtonWrapper>
            <ExitButton
              src="/images/commentDelete.svg/"
              onClick={onClickExit}
            />
          </ExitButtonWrapper>
          <EditCommentWrapper>
            <ArrowImg src="/images/arrow_comment.png/" />
            <EditCommentInputWrapper>
              <EditInput
                placeholder="수정할 댓글을 입력해주세요"
                onChange={onChangeInput}
              />
              <EditSubmitWrapper>
                <EditText> {contentsLength} / 100</EditText>
                <EidtSubmitButton onClick={onClickSubmit}>
                  수정하기
                </EidtSubmitButton>
              </EditSubmitWrapper>
            </EditCommentInputWrapper>
          </EditCommentWrapper>
        </EditWrapper>
      )}
    </Wrapper>
  );
}
