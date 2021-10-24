import {
  Wrapper,
  Header,
  Main,
  List,
  UsedMarket,
  Mypage,
  HeightLine,
} from "./LayoutNavigation.styles";

export default function LayoutNavigationUI(props: any) {
  return (
    <Wrapper>
      <Header>
        <Main onClick={props.onClickMain}>메인페이지</Main>
        <HeightLine />
        <List onClick={props.onClickBoard}>자유게시판</List>
        <HeightLine />
        <UsedMarket onClick={props.onClickUsedMarket}>중고마켓</UsedMarket>
        <HeightLine />
        <Mypage onClick={props.onClickMypage}>마이페이지</Mypage>
      </Header>
    </Wrapper>
  );
}
