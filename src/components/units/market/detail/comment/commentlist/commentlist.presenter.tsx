import { Dispatch, SetStateAction } from "react";
import { IQueryCommentData } from "./commentlist.container";
import { PageWrapper } from "./commentlist.styles";
import CommentListItem from "./commentlistitem";

interface IProps {
  commentData: IQueryCommentData | undefined;
  isEdit: boolean;
  seitIsEdit: Dispatch<SetStateAction<boolean>>;
  loggedInUser: string;
}

export default function CommentListUI(props: IProps) {
  return (
    <PageWrapper>
      {props.commentData?.fetchUseditemQuestions.map((data) => (
        <CommentListItem
          key={data}
          data={data}
          commentData={props.commentData}
          loggedInUser={props.loggedInUser}
        />
      ))}
    </PageWrapper>
  );
}
