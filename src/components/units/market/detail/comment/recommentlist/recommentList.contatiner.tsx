import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "../../marketDetail.queries";
import ReCommentListUI from "./recommentList.presenter";
import { FETCH_USEDITEM_QUESTION_ANSWERS } from "./recommentList.queries";

export default function ReCommentList(props: any) {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: answerData } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.commentId },
  });

  const loggedInuser = data?.fetchUserLoggedIn._id;

  return (
    <ReCommentListUI
      answerData={answerData}
      loggedInuser={loggedInuser}
      commentId={props.commentId}
    />
  );
}
