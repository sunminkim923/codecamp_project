// @ts-nocheck
import { Tooltip } from "antd";
import {
  Wrapper,
  Arrow,
  InputWrapper,
  RecommentInput,
  BottomWrapper,
  TextLength,
  SubmitButton,
  ExitWrapper,
  ExitIcon,
  ArrowIcon,
} from "./recommentWrite.styles";

export default function RecommnetWriteUI(props) {
  return (
    <>
      <ExitWrapper>
        <Tooltip placement="top" title="취소">
          <ExitIcon onClick={props.onClickExit} />
        </Tooltip>
      </ExitWrapper>
      <Wrapper>
        <ArrowIcon />
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
