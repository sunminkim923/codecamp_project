import { Modal } from "antd";
import Payment from "../../../commons/payment/payment";
import MybasketPage from "../mybasket/mybasket.container";
import MyProfilePage from "../myprofile/myprofile.container";
import {
  PageWrapper,
  UserInfoWrapper,
  Title,
  ProfileImg,
  UserName,
  PointWrapper,
  PigIcon,
  Point,
  MyBasketWrapper,
  BasketIcon,
  MyBasket,
  MyPointWrapper,
  MyPoint,
  MyProfileWrapper,
  ProfileIcon,
  MyProfile,
  ChargeButton,
  ModalWrapper,
  ModalUserName,
  ModalUserInfoWrapper,
  ModalPaymentWrapper,
  ModalUserPoint,
  ModalChargeInfo,
  ModalChargeInfoTest,
  ModalExitButton,
} from "./mypage.styles";

export default function SideMenuUI(props: any) {
  return (
    <>
      <PageWrapper>
        <UserInfoWrapper>
          <Title>MYPAGE</Title>
          <ProfileImg src="/images/profile.svg/" />
          <UserName>{props.data?.fetchUserLoggedIn.name}</UserName>
          <PointWrapper>
            <PigIcon src="/images/pig.png/" />
            <Point>{props.data?.fetchUserLoggedIn.userPoint.amount} P</Point>
          </PointWrapper>
          <ChargeButton onClick={props.onClickCharge}>충전하기</ChargeButton>
          {props.isModal && (
            <Modal
              visible={true}
              footer={null}
              onCancel={props.onClickClose}
              title="포인트 충천"
              width="700px"
            >
              <ModalWrapper>
                <ModalUserInfoWrapper>
                  <ModalUserName>
                    {props.data?.fetchUserLoggedIn.name} 님
                  </ModalUserName>
                  <ModalUserPoint>
                    현재 포인트 잔액 :{" "}
                    {props.data?.fetchUserLoggedIn.userPoint.amount} P{" "}
                  </ModalUserPoint>
                  <ModalChargeInfo>
                    선택하신 금액만큼 포인트가 충전됩니다.
                  </ModalChargeInfo>
                  <ModalChargeInfoTest>
                    ( 현재 테스트 버전으로 충전하신 금액은 익일 자동 환불되며
                    포인트는 정상적으로 충전됩니다. )
                  </ModalChargeInfoTest>
                </ModalUserInfoWrapper>
                <ModalPaymentWrapper>
                  <Payment setIsModal={props.setIsModal} />
                </ModalPaymentWrapper>
                <ModalExitButton onClick={props.onClickExit}>
                  돌아가기
                </ModalExitButton>
              </ModalWrapper>
            </Modal>
          )}
          <MyBasketWrapper>
            <BasketIcon src="/images/basket.png/" />
            <MyBasket>내 장터</MyBasket>
          </MyBasketWrapper>
          <MyPointWrapper>
            <PigIcon src="/images/pig.png/" />
            <MyPoint>내 포인트</MyPoint>
          </MyPointWrapper>
          <MyProfileWrapper>
            <ProfileIcon src="/images/profile.svg/" />
            <MyProfile>내 프로필</MyProfile>
          </MyProfileWrapper>
        </UserInfoWrapper>
        {/* <MybasketPage /> */}
        <MyProfilePage />
      </PageWrapper>
    </>
  );
}
