import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: #222222;
  display: flex;
  justify-content: center;
`;

export const Header = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  letter-spacing: 4px;
`;

export const Main = styled.div`
  font-size: 27px;
  font-weight: 700;
  color: white;
  :hover {
    color: tomato;
    transition: 0.5s;
  }
`;

export const List = styled.div`
  font-size: 27px;
  font-weight: 700;
  color: white;
`;

export const Game = styled.div`
  font-size: 27px;
  font-weight: 700;
  color: white;
`;
export const UsedMarket = styled.div`
  font-size: 27px;
  font-weight: 700;
  color: white;
`;
export const Mypage = styled.div`
  font-size: 27px;
  font-weight: 700;
  color: white;
`;

export const HeightLine = styled.div`
  width: 1px;
  height: 30px;
  border: 1px solid white;
`;
