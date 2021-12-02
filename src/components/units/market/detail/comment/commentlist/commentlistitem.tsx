import ReCommentList from "../recommentlist/recommentList.contatiner";
import RecommentWrite from "../reccomentWrite/recommentWrite.container";
import { ChangeEvent, useState } from "react";
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
  ProfileIcon,
  EditIcon,
  RecommentIcon,
  DeleteIcon,
  ExitIcon,
} from "./commentlist.styles";
import { OperationVariables, useMutation } from "@apollo/client";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
  UPDATE_USEDITEM_QUESTION,
} from "./commentlist.queries";
import { Modal, Tooltip } from "antd";
import { useRouter } from "next/router";
import { IQueryCommentData } from "./commentlist.container";

interface IProps {
  data: string | any;
  commentData: IQueryCommentData | undefined;
  loggedInUser: string;
}

export default function CommentListItem(props: IProps) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isRecomment, setIsRecomment] = useState<boolean>(false);
  const [textLength, setTextLength] = useState<number>(0);
  const [contents, setContents] = useState<string>("");
  const [isModal, setIsModal] = useState<boolean>(false);

  const router = useRouter();

  const [updateUseditemQuestion] = useMutation<any, OperationVariables>(
    UPDATE_USEDITEM_QUESTION
  );
  const [deleteUseditemQuestion] = useMutation<any, OperationVariables>(
    DELETE_USEDITEM_QUESTION
  );

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickExit = () => {
    setIsEdit(false);
  };

  const onClickRecomment = () => {
    setIsRecomment(true);
  };

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
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
    } catch (error: unknown | any) {
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
    } catch (error: unknown | any) {
      alert(error.message);
    }
  };
  return (
    <>
      <Wrapper key={props.data._id}>
        {!isEdit && (
          <div>
            <HeadWrapper>
              <ProfileIcon />
              <ContentsWrapper>
                <TopWrapper>
                  <Writer>{props.data.user.name}</Writer>
                  <ButtonWrapper>
                    {props.loggedInUser === props.data.user._id && (
                      <CommentEditWrapper>
                        <Tooltip placement="top" title="수정하기">
                          <EditIcon id={props.data._id} onClick={onClickEdit} />
                        </Tooltip>
                      </CommentEditWrapper>
                    )}

                    <RecommentWrapper>
                      <Tooltip placement="top" title="답글달기">
                        <RecommentIcon onClick={onClickRecomment} />
                      </Tooltip>
                    </RecommentWrapper>

                    {props.loggedInUser === props.data.user._id && (
                      <CommentDeleteWrapper>
                        <Tooltip placement="top" title="삭제하기">
                          <DeleteIcon onClick={onClickDelete} />
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
                <ExitIcon onClick={onClickExit} />
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
