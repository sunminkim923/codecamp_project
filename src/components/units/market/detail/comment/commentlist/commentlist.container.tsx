import { DocumentNode, useQuery } from "@apollo/client";
import { User } from "@sentry/types";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../../marketDetail.queries";
import CommentListUI from "./commentlist.presenter";
import { FETCH_USEDITEM_QUESTIONS } from "./commentlist.queries";

export interface IQueryData {
  fetchUserLoggedIn: User;
  data: string;
}

export interface IQueryCommentData {
  useditemId: string | string[] | undefined;
  FETCH_USEDITEM_QUESTIONS: DocumentNode;
  fetchUseditemQuestions: string[];
}

export default function CommentList() {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const router = useRouter();

  const { data } = useQuery<IQueryData>(FETCH_USER_LOGGED_IN);
  const { data: commentData } = useQuery<IQueryCommentData>(
    FETCH_USEDITEM_QUESTIONS,
    {
      variables: { useditemId: router.query.id },
    }
  );

  const loggedInUser: string = data?.fetchUserLoggedIn._id;

  return (
    <CommentListUI
      commentData={commentData}
      isEdit={isEdit}
      seitIsEdit={setIsEdit}
      loggedInUser={loggedInUser}
    />
  );
}
