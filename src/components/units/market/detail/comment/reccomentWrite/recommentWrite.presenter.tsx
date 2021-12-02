import { Tooltip } from "antd";
import { ChangeEvent } from "react";
import {
  Wrapper,
  InputWrapper,
  RecommentInput,
  BottomWrapper,
  TextLength,
  SubmitButton,
  ExitWrapper,
  ExitIcon,
  ArrowIcon,
} from "./recommentWrite.styles";

interface IProps {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  textLength: number;
  contents: string;
  onClickExit: () => void;
  onClickSubmit: () => Promise<void>;
}

export default function RecommnetWriteUI(props: IProps) {
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
