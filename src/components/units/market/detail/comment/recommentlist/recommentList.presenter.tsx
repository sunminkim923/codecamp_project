import { IQueryAnswerData } from "./recommentList.contatiner";
import ReCommentListItem from "./recommentListItem";

interface IProps {
  answerData: IQueryAnswerData | undefined;
  loggedInuser: any;
  commentId: any;
}

export default function ReCommentListUI(props: IProps) {
  return (
    <div>
      {props.answerData?.fetchUseditemQuestionAnswers.map((data) => (
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
