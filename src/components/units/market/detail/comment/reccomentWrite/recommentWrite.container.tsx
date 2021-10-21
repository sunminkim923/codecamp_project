// @ts-nocheck
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import { FETCH_USEDITEM_QUESTION_ANSWERS } from "../recommentlist/recommentList.queries";
import RecommnetWriteUI from "./recommentWrite.presenter";
import { CREATE_USEDITEM_QUESTION_ANSWER } from "./recommentWrite.queries";

export default function RecommentWrite(props) {
  const [textLength, setTextLength] = useState(0);
  const [contents, setContents] = useState("");

  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USEDITEM_QUESTION_ANSWER
  );

  const onChangeInput = (event) => {
    setTextLength(event.target.value.length);
    setContents(event.target.value);
  };

  const onClickExit = () => {
    props.setIsRecomment(false);
  };

  const onClickSubmit = async () => {
    try {
      const result = await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: { contents: contents },
          useditemQuestionId: props.data,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.data },
          },
        ],
      });
      setContents("");
      props.setIsRecomment(false);
      Modal.info({ content: "댓글이 등록되었습니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <RecommnetWriteUI
      onChangeInput={onChangeInput}
      textLength={textLength}
      contents={contents}
      onClickExit={onClickExit}
      onClickSubmit={onClickSubmit}
    />
  );
}
