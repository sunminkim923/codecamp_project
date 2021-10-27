//@ts-nocheck
import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 212px;
  height: 100%;
`;

export const Wrapper = styled.div`
  width: 1200px;
  margin-right: 20px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`;

export const BestProductWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
`;

export const BestProduct = styled.div`
  width: 282px;
  height: 391px;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    background-color: #ffd600;
    transition: 0.5s;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.4);
  }
  cursor: pointer;
`;

export const BestProductImg = styled.img`
  width: 242px;
  height: 242px;
  background-color: #f2f2f2;
`;

export const BestProductInfoWrapper = styled.div`
  padding-top: 20px;
  width: 242px;
`;

export const BestProductName = styled.div`
  width: 240px;
  font-size: 18px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const BestProductInfoBottomWrapper = styled.div`
  width: 242px;
  display: flex;
  justify-content: space-between;
`;

export const BestProductCharacterWrapper = styled.div``;

export const BestProductRemarks = styled.div`
  height: 18px;
  font-size: 12px;
  font-weight: 500;
  color: #4f4f4f;
`;

export const BestProductPrice = styled.div`
  padding-top: 12px;
  font-size: 18px;
  font-weight: 700;
`;

export const BestProductHeartPointWrapper = styled.div`
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BestProductHeart = styled.img`
  text-align: end;
  width: 20px;
  height: 20px;
`;

export const BestProductHeartPoint = styled.div`
  padding-top: 5px;
  font-size: 16px;

  font-weight: 400;
`;

export const ProductListWrapper = styled.div`
  padding-top: 92px;
  padding-bottom: 80px;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextWrapper = styled.div`
  display: flex;
  padding-top: 12px;
`;

export const SearchWrapper = styled.div`
  display: flex;
`;

export const Text01 = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding-right: 20px;
  color: ${(props) => (props.soldItem ? "" : "#ffd600")};
  cursor: pointer;
`;

export const Text02 = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding-right: 20px;
  color: ${(props) => (props.soldItem ? "#ffd600" : "")};
  cursor: pointer;
`;

export const SearchInput = styled.input`
  width: 550px;
  height: 52px;
  border: none;
  background-color: #f2f2f2;
  font-size: 16px;
  padding-left: 40px;
  border-radius: 10px;
`;

export const SearchDate = styled.div`
  width: 282px;
  height: 52px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  font-size: 16px;
  text-align: center;
  padding-top: 12px;
  margin-left: 20px;
`;
export const SearchButton = styled.button`
  width: 140px;
  height: 52px;
  border: none;
  background-color: black;
  color: white;
  margin-left: 20px;
  border-radius: 10px;
`;

export const ProductWrapper = styled.div`
  border-top: 1px solid #bdbdbd;
  margin-top: 40px;
  padding-top: 28px;
  display: flex;
  padding-bottom: 28px;
  cursor: pointer;
`;

export const ProductImg = styled.img`
  width: 160px;
  height: 160px;
  background-color: #f2f2f2;
`;

export const ProductExplanationWrapper = styled.div`
  padding-left: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ProductName = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

export const ProductCharacter = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #4f4f4f;
`;

export const ProductTag = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
`;

export const ProfileWrapper = styled.div`
  padding-top: 26px;
`;

export const ProfileImg = styled.img`
  margin-right: 6px;
`;

export const HeartPoint = styled.img`
  margin-right: 6px;
  margin-left: 22px;
`;

export const ContentsWrapper = styled.div`
  padding-top: 8px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #bdbdbd;
  padding-top: 40px;
`;

export const SubmitButton = styled.button`
  width: 124px;
  height: 52px;
  background-color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 7px;
  :hover {
    background-color: #ffd600;
    transition: 0.5s;
  }
  cursor: pointer;
`;

export const StickyWrapper = styled.div`
  padding-top: 100px;
  height: 100%;
`;

export const InfiniteScrollWrapper = styled.div`
  height: 1000px;
  overflow: auto;
`;

export const Keyword = styled.span`
  color: ${(props: { isMatched: boolean }) => (props.isMatched ? "red" : "")};
  font-weight: ${(props: { isMatched: boolean }) =>
    props.isMatched ? "bolder" : ""};
`;
