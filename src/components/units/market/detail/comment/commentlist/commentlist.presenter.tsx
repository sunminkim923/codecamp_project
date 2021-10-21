// @ts-nocheck
import { PageWrapper } from "./commentlist.styles";
import CommentListItem from "./commentlistitem";

//@ts-ignore
export default function CommentListUI(props) {
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
