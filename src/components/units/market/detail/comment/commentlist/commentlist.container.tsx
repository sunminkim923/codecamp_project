import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../../marketDetail.queries";
import CommentListUI from "./commentlist.presenter";
import { FETCH_USEDITEM_QUESTIONS } from "./commentlist.queries";

export default function CommentList() {
  const [isEdit, setIsEdit] = useState(false);

  const router = useRouter();

  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: commentData } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: router.query.id },
  });

  const loggedInUser = data?.fetchUserLoggedIn._id;

  console.log("유저", loggedInUser);

  return (
    <CommentListUI
      commentData={commentData}
      isEdit={isEdit}
      seitIsEdit={setIsEdit}
      loggedInUser={loggedInUser}
    />
  );
}
