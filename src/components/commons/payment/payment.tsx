// import Head from "next/head";
import Script from "next/script";
import { ChangeEvent, useState } from "react";
import styled from "@emotion/styled";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { FETCH_USER_LOGGED_IN } from "../../units/mypage/sidemenu/mypage.queries";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;

const Wrapper = styled.div`
  width: 450px;
  display: flex;
  justify-content: space-around;
`;

const SelectAmount = styled.select`
  width: 200px;
  height: 50px;
  font-size: 18px;
  font-weight: 500;
`;

const PaymentButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background-color: #ffd600;
`;

declare const window: typeof globalThis & {
  IMP: any;
};

export default function Payment(props: any) {
  const [amount, setAmount] = useState(0);

  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const onChangeOption = (event: ChangeEvent<HTMLSelectElement>) => {
    setAmount((event.target as any).value);
  };

  const onClickPayment = () => {
    props.setIsModal(false);

    window.IMP.init("imp49910675");
    window.IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "포인트충전",
        amount: amount,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        // buyer_tel: "010-1234-4242",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
      },
      async function (rsp: any) {
        // callback
        if (rsp.success) {
          await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
            refetchQueries: [
              {
                query: FETCH_USER_LOGGED_IN,
              },
            ],
          });
          Modal.info({ content: "결제에 성공하였습니다." });
        } else {
          // 결제 실패 시 로직,
          Modal.error({ content: "결제에 실패하였습니다." });
        }
      }
    );
  };

  return (
    <div>
      {/* <Head> */}
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"
      ></Script>
      {/* </Head> */}
      <Wrapper>
        <SelectAmount name="selected" onChange={onChangeOption}>
          <option>--금액을 선택하세요--</option>
          <option value="500">500원</option>
          <option value="1000">1,000원</option>
          <option value="3000">3,000원</option>
          <option value="5000">5,000원</option>
          <option value="10000">1,0000원</option>
        </SelectAmount>
        <PaymentButton onClick={onClickPayment}>충전하기</PaymentButton>
      </Wrapper>
    </div>
  );
}
