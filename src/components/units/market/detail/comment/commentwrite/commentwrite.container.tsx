import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import CommentWriteUI from "./commentwrite.presenter";
import { CREATE_USEDITEM_QUESTION } from "./commentwrite.queries";
import { FETCH_USEDITEM_QUESTIONS } from "../commentlist/commentlist.queries";
import { Modal } from "antd";

export default function CommentWrite() {
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const router = useRouter();
  const [contents, setContents] = useState("");
  const [contentsLength, setContentsLength] = useState(0);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    setContentsLength(event.target.value.length);
  };

  const onClickRegister = async () => {
    try {
      const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: { contents: contents },
          useditemId: router.query.id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.id },
          },
        ],
      });
      Modal.info({ content: "댓글을 등록합니다." });
      setContents("");
      setContentsLength(0);
    } catch (error: unknown | any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <CommentWriteUI
      onClickRegister={onClickRegister}
      onChangeContents={onChangeContents}
      contentsLength={contentsLength}
      contents={contents}
    />
  );
}
