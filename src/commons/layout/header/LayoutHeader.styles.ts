import styled from "@emotion/styled";

export const Header = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 80px;
  padding-right: 40px;
`;

// export const BrandLogo = styled.img`
//   width: 120px;
//   height: 120px;
//   cursor: pointer;
// `;

export const BrandLogo = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 10px;
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 1px;
`;

export const HeightLine = styled.div`
  width: 0.5px;
  height: 12px;
  margin-right: 15px;
  margin-left: 15px;
  border-left: 0.5px solid black;
`;

export const UserPoint = styled.div`
  font-size: 16px;
  font-weight: 700;
  /* letter-spacing: 1px; */
  color: #ffd600;
  cursor: pointer;
`;
