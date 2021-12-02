import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "../../marketDetail.queries";
import ReCommentListUI from "./recommentList.presenter";
import { FETCH_USEDITEM_QUESTION_ANSWERS } from "./recommentList.queries";

interface IProps {
  commentId: any;
}

interface IQueryData {
  fetchUserLoggedIn: any;
}
export interface IQueryAnswerData {
  useditemQuestionId: any;
  answerData: string;
  fetchUseditemQuestionAnswers: string[];
}
export default function ReCommentList(props: IProps) {
  const { data } = useQuery<IQueryData>(FETCH_USER_LOGGED_IN);
  const { data: answerData } = useQuery<IQueryAnswerData>(
    FETCH_USEDITEM_QUESTION_ANSWERS,
    {
      variables: { useditemQuestionId: props.commentId },
    }
  );

  const loggedInuser = data?.fetchUserLoggedIn._id;

  return (
    <ReCommentListUI
      answerData={answerData}
      loggedInuser={loggedInuser}
      commentId={props.commentId}
    />
  );
}
