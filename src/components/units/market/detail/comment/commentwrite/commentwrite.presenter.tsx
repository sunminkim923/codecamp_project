import { ChangeEvent } from "react";
import {
  PageWrapper,
  Wrapper,
  UnderLine,
  HeadWrapper,
  Text,
  ContentsWrapper,
  ContentsBox,
  RegisterWrapper,
  TextLength,
  RegisterButton,
  CommnetIcon,
} from "./commentwrite.styles";

interface IProps {
  onClickRegister: () => Promise<void>;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  contentsLength: number;
  contents: string;
}

export default function CommentWriteUI(props: IProps) {
  return (
    <PageWrapper>
      <Wrapper>
        <UnderLine />
        <HeadWrapper>
          <CommnetIcon />
          <Text>문의하기</Text>
        </HeadWrapper>
        <ContentsWrapper>
          <ContentsBox
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContents}
            value={props.contents}
          />
          <RegisterWrapper>
            <TextLength> {props.contentsLength} / 100</TextLength>
            <RegisterButton onClick={props.onClickRegister}>
              등록하기
            </RegisterButton>
          </RegisterWrapper>
        </ContentsWrapper>
      </Wrapper>
    </PageWrapper>
  );
}
