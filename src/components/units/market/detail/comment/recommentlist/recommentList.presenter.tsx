import ReCommentListItem from "./recommentListItem";

export default function ReCommentListUI(props: any) {
  return (
    <div>
      {props.answerData?.fetchUseditemQuestionAnswers.map((data: any) => (
        <ReCommentListItem
          key={data}
          data={data}
          loggedInuser={props.loggedInuser}
          commentId={props.commentId}
        />
      ))}
    </div>
  );
}
