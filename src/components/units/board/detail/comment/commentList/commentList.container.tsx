import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommentListUI from "./commentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./commentList.queries";

export interface IQueryCommentData {
  fetchBoardComments: string[];
}

export default function CommentList() {
  const router = useRouter();
  const { data: commentData } = useQuery<IQueryCommentData>(
    FETCH_BOARD_COMMENTS,
    {
      variables: { boardId: router.query.Id },
    }
  );

  return <CommentListUI commentData={commentData} />;
}
