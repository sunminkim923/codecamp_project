// @ts-nocheck
import Pagenation from "../../../commons/pagenations/pagenations.container";
import { getDate } from "../../../../commons/libraries/utils";
import {
  PageWrapper,
  Wrapper,
  HeadWrapper,
  Title,
  BestBoardsWrapper,
  BestBoardWrapper,
  BestBoardImg,
  BestBoardTitle,
  BottomWrapper,
  WriterWrapper,
  LikeBoardWrapper,
  Writer,
  ProfileImg,
  WriterName,
  WriteDate,
  BestBoardImgWrapper,
  LikeBoardImg,
  LikeBoardPoint,
  SearchWrapper,
  SearchInput,
  DateInput,
  SearchButton,
  BoardListWrapper,
  ListHeadWrapper,
  HeadNumber,
  HeadTitle,
  HeadWriter,
  HeadDate,
  ListBodyWrapper,
  ListNumber,
  ListTitle,
  ListWriter,
  ListDate,
  ListBottomWrapper,
  SubmitButton,
  PagenationWrapper,
  Keyword,
} from "./boardList.styles";

//@ts-ignore
export default function BoardListUI(props) {
  return (
    <PageWrapper>
      <Wrapper>
        <HeadWrapper>
          <Title>베스트 게시글</Title>
          <BestBoardsWrapper>
            {/* @ts-ignore */}
            {props.bestData?.fetchBoardsOfTheBest.map((data) => (
              <BestBoardWrapper
                onClick={() => props.onClickBestBoard(data._id)}
                key={data._id}
              >
                <BestBoardImgWrapper>
                  <BestBoardImg
                    src={
                      data.images[0]
                        ? `https://storage.googleapis.com/${data.images[0]}`
                        : "/images/porsche01.png/"
                    }
                  />
                </BestBoardImgWrapper>

                <BestBoardTitle>{data.title}</BestBoardTitle>
                <BottomWrapper>
                  <WriterWrapper>
                    <Writer>
                      <ProfileImg src="/images/profile.svg" />
                      <WriterName>{data.writer}</WriterName>
                    </Writer>
                    <WriteDate>{getDate(data.createdAt)}</WriteDate>
                  </WriterWrapper>
                  <LikeBoardWrapper>
                    <LikeBoardImg src="/images/likeboard.png/" />
                    <LikeBoardPoint>{data.likeCount}</LikeBoardPoint>
                  </LikeBoardWrapper>
                </BottomWrapper>
              </BestBoardWrapper>
            ))}
          </BestBoardsWrapper>
        </HeadWrapper>
        <SearchWrapper>
          <SearchInput
            placeholder="제목을 검색해주세요"
            onChange={props.onChangeSearch}
          />
          {/* <DateInput placeholder="YYYY.MM.DD ~ YYYY.MM.DD" /> */}
          <SearchButton>검색하기</SearchButton>
        </SearchWrapper>
        <BoardListWrapper>
          <ListHeadWrapper>
            <HeadNumber>번호</HeadNumber>
            <HeadTitle>제목</HeadTitle>
            <HeadWriter>작성자</HeadWriter>
            <HeadDate>날짜</HeadDate>
          </ListHeadWrapper>
          {/* @ts-ignore */}
          {props.data?.fetchBoards.map((data, index) => (
            <ListBodyWrapper
              key={data._id}
              onClick={() => props.onClickBoard(data._id)}
            >
              <ListNumber>{index + 1}</ListNumber>
              <ListTitle>
                {data.title
                  .replaceAll(props.keyword, `$!${props.keyword}$!`)
                  .split("$!")
                  .map((keywordData, index) => (
                    <Keyword
                      id={keywordData._id}
                      key={index}
                      isMatched={props.keyword === keywordData}
                      onClick={() => props.onClickBoard(data._id)}
                    >
                      {keywordData}
                    </Keyword>
                  ))}
              </ListTitle>
              <ListWriter>{data.writer}</ListWriter>
              <ListDate>{getDate(data.createdAt)}</ListDate>
            </ListBodyWrapper>
          ))}
        </BoardListWrapper>
        <ListBottomWrapper>
          <SubmitButton onClick={props.onClickSubmit}>
            게시물 등록하기
          </SubmitButton>
        </ListBottomWrapper>
        <PagenationWrapper>
          <Pagenation
            refetch={props.refetch}
            boardCountData={props.boardCountData}
          />
        </PagenationWrapper>
      </Wrapper>
    </PageWrapper>
  );
}
