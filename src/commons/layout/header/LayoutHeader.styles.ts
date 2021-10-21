import styled from "@emotion/styled";

export const Header = styled.div`
  width: 100%;
  height: 120px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 80px;
  padding-right: 40px;
`;

export const BrandLogo = styled.img`
  width: 120px;
  height: 120px;
  cursor: pointer;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const Text = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  font-size: 28px;
  font-weight: 800;
  cursor: pointer;
  letter-spacing: 3px;
`;

export const HeightLine = styled.div`
  width: 1px;
  height: 30px;
  border: 1px solid black;
`;

export const UserPoint = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #ffd600;
  cursor: pointer;
`;
