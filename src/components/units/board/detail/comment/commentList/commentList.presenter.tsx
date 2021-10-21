// @ts-nocheck
import { PageWrapper } from "./commentList.styles";
import CommentListItem from "./commentListItem";

export default function CommentListUI(props) {
  return (
    <PageWrapper>
      {props.commentData?.fetchBoardComments.map((data) => (
        <CommentListItem data={data} key={data} />
      ))}
    </PageWrapper>
  );
}
