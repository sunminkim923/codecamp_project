import { useMutation } from "@apollo/client";
import { Modal, Tooltip } from "antd";
import { getDate } from "../../../../../../commons/libraries/utils";
import { ChangeEvent, useState } from "react";
import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
  UPDATE_USEDITEM_QUESTION_ANSWER,
} from "./recommentList.queries";
import {
  Wrapper,
  CommentWrapper,
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
  EidtTooltopWrapper,
  DeleteTooltipWrapper,
  ProfielIcon,
  ArrowIcon,
  EditIcon,
  DeleteIcon,
  ExitIcon,
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
      Modal.info({ content: "????????? ?????????????????????." });
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
      Modal.info({ content: "????????? ???????????????." });
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
            <ArrowIcon />
            <BodyWrapper>
              <ProfielIcon />
              <ContentsWrapper>
                <WriterWrapper>
                  <WriterName>{props.data.user.name}</WriterName>
                  <Contents>{props.data.contents}</Contents>
                </WriterWrapper>
                <EditButtonWrapper>
                  {props.loggedInuser === props.data.user._id && (
                    <EidtTooltopWrapper>
                      <Tooltip placement="top" title="????????????">
                        <EditIcon onClick={onClickEdit} />
                      </Tooltip>
                    </EidtTooltopWrapper>
                  )}

                  {props.loggedInuser === props.data.user._id && (
                    <DeleteTooltipWrapper>
                      <Tooltip placement="top" title="????????????">
                        <DeleteIcon onClick={onClickDelete} />
                      </Tooltip>
                    </DeleteTooltipWrapper>
                  )}
                  {isModal && (
                    <Modal
                      title="?????? ??????"
                      visible={true}
                      onCancel={onClickCancel}
                      onOk={onClickOk}
                    >
                      ????????? ?????????????????????????
                    </Modal>
                  )}
                </EditButtonWrapper>
              </ContentsWrapper>
            </BodyWrapper>
          </CommentWrapper>
          <CreatedAt> {getDate(props.data.createdAt)}</CreatedAt>
        </div>
      )}
      {isEdit && (
        <EditWrapper>
          <ExitButtonWrapper>
            <Tooltip placement="top" title="??????">
              <ExitIcon onClick={onClickExit} />
            </Tooltip>
          </ExitButtonWrapper>
          <EditCommentWrapper>
            <ArrowIcon />
            <EditCommentInputWrapper>
              <EditInput
                placeholder="????????? ????????? ??????????????????"
                onChange={onChangeInput}
              />
              <EditSubmitWrapper>
                <EditText> {contentsLength} / 100</EditText>
                <EidtSubmitButton onClick={onClickSubmit}>
                  ????????????
                </EidtSubmitButton>
              </EditSubmitWrapper>
            </EditCommentInputWrapper>
          </EditCommentWrapper>
        </EditWrapper>
      )}
    </Wrapper>
  );
}
