import {
  Wrapper,
  SubWrapper,
  ContentsWrapper,
  Contents,
  Title,
  Underline,
  Copyright,
  Version,
} from "./LayoutFooter.styles";

export default function LayoutFooterUI() {
  return (
    <Wrapper>
      <SubWrapper>
        <Title> MOCAR</Title>
        <ContentsWrapper>
          <Contents> 제작자 : 김선민</Contents>
          <Contents> 연락처 : 010-4442-6120</Contents>
          <Contents> 이메일 : tjsals0406@gmail.com</Contents>
          <Contents> 깃허브 : https://github.com/sunminkim923 </Contents>
          <Version> 2.1.0 ver. </Version>
        </ContentsWrapper>
        <Underline />
        <Copyright>Copyright © All Rights Reserved </Copyright>
      </SubWrapper>
    </Wrapper>
  );
}
