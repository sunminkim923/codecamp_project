import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const UserInfoWrapper = styled.div`
  width: 103px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 40px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const ProfileImg = styled.img`
  padding-top: 48px;
`;

export const UserName = styled.div`
  padding-top: 28px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const PointWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
`;

export const PigIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Point = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const MyBasketWrapper = styled.div`
  padding-top: 35px;
  display: flex;
  align-items: center;
`;

export const BasketIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const MyBasket = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding-left: 10px;
`;

export const MyPointWrapper = styled.div`
  display: flex;
  padding-top: 23px;
  align-items: center;
`;

export const MyPoint = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding-left: 10px;
`;

export const MyProfileWrapper = styled.div`
  padding-top: 23px;
  display: flex;
  align-items: center;
`;

export const ProfileIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const MyProfile = styled.div`
  padding-left: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const ChargeButton = styled.button`
  width: 100%;
  height: 35px;
  margin-top: 15px;
  background-color: #ffd600;
  border: none;
  cursor: pointer;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalUserName = styled.div`
  font-size: 35px;
  font-weight: bold;
  text-align: center;
`;

export const ModalUserInfoWrapper = styled.div``;

export const ModalPaymentWrapper = styled.div`
  padding-top: 20px;
`;

export const ModalContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ModalUserPoint = styled.div`
  font-size: 25px;
  font-weight: 500;
  padding-top: 10px;
  text-align: center;
`;

export const ModalChargeInfo = styled.div`
  text-align: center;
  padding-top: 10px;
  font-size: 18px;
`;

export const ModalChargeInfoTest = styled.div`
  text-align: center;
  padding-top: 10px;
  font-size: 15px;
  color: red;
`;

export const ModalExitButton = styled.button`
  width: 200px;
  height: 50px;
  cursor: pointer;
  border: none;
  margin-top: 35px;
  :hover {
    background-color: #ffd600;
  }
`;
