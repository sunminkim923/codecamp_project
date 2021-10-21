import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div``;

export const HeadWrapper = styled.div`
  padding-top: 80px;
  width: 1200px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`;

export const BestBoardsWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
`;

export const BestBoardWrapper = styled.div`
  width: 282px;
  height: 257px;
  border: 1px solid #bdbdbd;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
  }
`;

export const BestBoardImgWrapper = styled.div``;

export const BestBoardImg = styled.img`
  width: 100%;
  height: 128px;
  border-radius: 10px;
`;

export const BestBoardTitle = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 500;
`;

export const BottomWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const WriterWrapper = styled.div``;

export const LikeBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Writer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const WriterName = styled.div`
  font-size: 16px;
  font-weight: 400;
  padding-left: 6px;
`;

export const WriteDate = styled.div`
  padding-top: 8px;
  font-size: 12px;
  font-weight: 400;
  color: #828282;
`;

export const LikeBoardImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const LikeBoardPoint = styled.div`
  font-size: 16px;
  font-weight: 400;
  padding-top: 6px;
`;

export const SearchWrapper = styled.div`
  padding-top: 83px;
  display: flex;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
  width: 1040px;
  height: 52px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 30px;
`;

export const DateInput = styled.input`
  width: 244px;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  text-align: center;
`;

export const SearchButton = styled.button`
  width: 140px;
  height: 52px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const BoardListWrapper = styled.div`
  width: 100%;
  margin-top: 27px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const ListHeadWrapper = styled.div`
  height: 52px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HeadNumber = styled.div`
  width: 60px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;
export const HeadTitle = styled.div`
  width: 700px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

export const HeadWriter = styled.div`
  width: 120px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

export const HeadDate = styled.div`
  width: 120px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

export const ListBodyWrapper = styled.div`
  width: 100%;
  height: 52px;
  border-top: 1px solid #bdbdbd;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

export const ListNumber = styled.div`
  width: 60px;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
  text-align: center;
`;

export const ListTitle = styled.div`
  width: 700px;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
  text-align: center;
`;

export const ListWriter = styled.div`
  width: 120px;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
  text-align: center;
`;

export const ListDate = styled.div`
  width: 120px;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
  text-align: center;
`;

export const ListBottomWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: flex-end;
`;

export const SubmitButton = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
    transition: 0.5s;
  }
`;

export const PagenationWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
`;

export const Keyword = styled.span`
  color: ${(props: { isMatched: boolean }) => (props.isMatched ? "red" : "")};
  font-weight: ${(props: { isMatched: boolean }) =>
    props.isMatched ? "bolder" : ""};
`;
