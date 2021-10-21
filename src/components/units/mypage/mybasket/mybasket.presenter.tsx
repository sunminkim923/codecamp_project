import {
  Wrapper,
  HeadWrapper,
  MyProduct,
  PickedProduct,
  BodyWrapper,
  TopWrapper,
  BoardTitle,
  ListWrapper,
  Board,
} from "./mybasket.styles";

export default function MybasketUI() {
  return (
    <>
      <Wrapper>
        <HeadWrapper>
          <MyProduct>나의 상품</MyProduct>
          <PickedProduct>마이찜</PickedProduct>
        </HeadWrapper>
        <BodyWrapper>
          <TopWrapper>
            <BoardTitle>번호</BoardTitle>
            <BoardTitle>제목</BoardTitle>
            <BoardTitle>판매가격</BoardTitle>
            <BoardTitle>날짜</BoardTitle>
          </TopWrapper>
          <ListWrapper>
            <Board>1</Board>
            <Board>게시물 제목입니다.</Board>
            <Board>₩ 2,000</Board>
            <Board>2020.09.23</Board>
          </ListWrapper>
          <ListWrapper>
            <Board>1</Board>
            <Board>게시물 제목입니다.</Board>
            <Board>₩ 2,000</Board>
            <Board>2020.09.23</Board>
          </ListWrapper>
          <ListWrapper>
            <Board>1</Board>
            <Board>게시물 제목입니다.</Board>
            <Board>₩ 2,000</Board>
            <Board>2020.09.23</Board>
          </ListWrapper>
          <ListWrapper>
            <Board>1</Board>
            <Board>게시물 제목입니다.</Board>
            <Board>₩ 2,000</Board>
            <Board>2020.09.23</Board>
          </ListWrapper>
        </BodyWrapper>
      </Wrapper>
    </>
  );
}
