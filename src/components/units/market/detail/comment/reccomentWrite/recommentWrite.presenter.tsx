// @ts-nocheck
import {
  Wrapper,
  Arrow,
  InputWrapper,
  RecommentInput,
  BottomWrapper,
  TextLength,
  SubmitButton,
  ExitWrapper,
  ExitButton,
} from "./recommentWrite.styles";

export default function RecommnetWriteUI(props) {
  return (
    <>
      <ExitWrapper>
        <ExitButton
          src="/images/commentDelete.svg"
          onClick={props.onClickExit}
        />
      </ExitWrapper>
      <Wrapper>
        <Arrow src="/images/arrow_comment.png" />
        <InputWrapper>
          <RecommentInput
            placeholder="답글을 입력해주세요"
            onChange={props.onChangeInput}
            value={props.contents}
          />
          <BottomWrapper>
            <TextLength> {props.textLength} / 100</TextLength>
            <SubmitButton onClick={props.onClickSubmit}>답글등록</SubmitButton>
          </BottomWrapper>
        </InputWrapper>
      </Wrapper>
    </>
  );
}
