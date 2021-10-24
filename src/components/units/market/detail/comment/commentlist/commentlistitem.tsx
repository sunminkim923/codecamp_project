import ReCommentList from "../recommentlist/recommentList.contatiner";
import RecommentWrite from "../reccomentWrite/recommentWrite.container";
import { useState } from "react";
import { getDate } from "../../../../../../commons/libraries/utils";

import {
  Wrapper,
  HeadWrapper,
  ProfileImg,
  ContentsWrapper,
  TopWrapper,
  Writer,
  ButtonWrapper,
  CommentEdit,
  ReComment,
  CommentDelete,
  Contents,
  WritedDate,
  UnderLine,
  EditWrapper,
  ExitWrapper,
  ExitButton,
  InputWrapper,
  CommentInput,
  SubmitWrapper,
  TextLength,
  SubmitButton,
  CommentEditWrapper,
  RecommentWrapper,
  CommentDeleteWrapper,
} from "./commentlist.styles";
import { useMutation } from "@apollo/client";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
  UPDATE_USEDITEM_QUESTION,
} from "./commentlist.queries";
import { Modal, Tooltip } from "antd";
import { useRouter } from "next/router";

export default function CommentListItem(props: any) {
  const [isEdit, setIsEdit] = useState(false);
  const [isRecomment, setIsRecomment] = useState(false);
  const [textLength, setTextLength] = useState(0);
  const [contents, setContents] = useState("");
  const [isModal, setIsModal] = useState(false);

  const router = useRouter();

  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);
  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickExit = () => {
    setIsEdit(false);
  };

  const onClickRecomment = () => {
    setIsRecomment(true);
  };

  //@ts-ignore
  const onChangeText = (event) => {
    setContents(event.target.value);
    setTextLength(event.target.value.length);
  };

  const onClicSubmit = async () => {
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: contents,
          },
          useditemQuestionId: props.data._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.id },
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

  const onClickDelete = () => {
    setIsModal(true);
  };

  const onClickCancel = () => {
    setIsModal(false);
  };

  const onClickOk = async () => {
    try {
      await deleteUseditemQuestion({
        variables: { useditemQuestionId: props.data._id },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.id },
          },
        ],
      });
      Modal.info({ content: "댓글이 삭제되었습니다." });
      setIsModal(false);
    } catch (error) {
      //@ts-ignore
      alert(error.message);
    }
  };
  return (
    <>
      <Wrapper key={props.data._id}>
        {!isEdit && (
          <div>
            <HeadWrapper>
              <ProfileImg src="/images/profile.svg/" />
              <ContentsWrapper>
                <TopWrapper>
                  <Writer>{props.data.user.name}</Writer>
                  <ButtonWrapper>
                    {props.loggedInUser === props.data.user._id && (
                      <CommentEditWrapper>
                        <Tooltip placement="top" title="수정하기">
                          <CommentEdit
                            id={props.data._id}
                            src="/images/commentEdit.svg/"
                            onClick={onClickEdit}
                          />
                        </Tooltip>
                      </CommentEditWrapper>
                    )}

                    <RecommentWrapper>
                      <Tooltip placement="top" title="답글달기">
                        <ReComment
                          src="/images/commentButton.svg/"
                          onClick={onClickRecomment}
                        />
                      </Tooltip>
                    </RecommentWrapper>

                    {props.loggedInUser === props.data.user._id && (
                      <CommentDeleteWrapper>
                        <Tooltip placement="top" title="삭제하기">
                          <CommentDelete
                            src="/images/commentDelete.svg"
                            onClick={onClickDelete}
                          />
                        </Tooltip>
                      </CommentDeleteWrapper>
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
                  </ButtonWrapper>
                </TopWrapper>
                <Contents>{props.data.contents}</Contents>
              </ContentsWrapper>
            </HeadWrapper>
            <WritedDate> {getDate(props.data.createdAt)} </WritedDate>
          </div>
        )}
        {isEdit && (
          <EditWrapper>
            <ExitWrapper>
              <Tooltip placement="top" title="취소">
                <ExitButton
                  src="/images/commentDelete.svg/"
                  onClick={onClickExit}
                />
              </Tooltip>
            </ExitWrapper>
            <InputWrapper>
              <CommentInput
                placeholder="수정할 댓글을 입력해주세요"
                onChange={onChangeText}
              />
              <SubmitWrapper>
                <TextLength> {textLength} / 100 </TextLength>
                <SubmitButton onClick={onClicSubmit}>수정하기</SubmitButton>
              </SubmitWrapper>
            </InputWrapper>
          </EditWrapper>
        )}
        {isRecomment && (
          <RecommentWrite
            data={props.data._id}
            setIsRecomment={setIsRecomment}
          />
        )}
        <ReCommentList commentId={props.data?._id} />
        <UnderLine />
      </Wrapper>
    </>
  );
}
