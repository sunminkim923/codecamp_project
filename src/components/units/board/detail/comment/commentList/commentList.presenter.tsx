import { IQueryCommentData } from "./commentList.container";
import { PageWrapper } from "./commentList.styles";
import CommentListItem from "./commentListItem";

interface IProps {
  commentData: IQueryCommentData | undefined;
}

export default function CommentListUI(props: IProps) {
  return (
    <PageWrapper>
      {props.commentData?.fetchBoardComments.map((data) => (
        <CommentListItem data={data} key={data} />
      ))}
    </PageWrapper>
  );
}
