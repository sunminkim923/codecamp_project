//@ts-nocheck
import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  width: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 100px;
`;

export const Wrapper = styled.div`
  margin: auto;
  width: 384px;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 64px;
  margin-top: 80px;
  border-radius: 15px;
  padding-left: 10px;
  border: 2px solid lightgray;
`;

export const PasswordInput = styled.input`
  width: 100%;
  height: 64px;
  margin-top: 20px;
  border-radius: 15px;
  padding-left: 10px;
  border: 2px solid lightgray;
`;

export const KeepLogin = styled.span`
  margin-top: 20px;
  padding-left: 12px;
  font-size: 16px;
`;

export const LoginButton = styled.button`
  margin-top: 45px;
  width: 100%;
  height: 64px;
  border-radius: 15px;
  border: 0.5px solid lightgray;
  background-color: ${(props) => (props.isActive ? "#ffd600" : "")};
  font-size: 18px;
`;

export const UnderLine = styled.div`
  padding-top: 40px;
  width: 100%;
  border-bottom: 1px solid lightgray;
`;

export const OnclickWrapper = styled.div`
  padding-top: 25px;
  display: flex;
  justify-content: space-evenly;
  font-size: 14px;
`;

export const FindEmail = styled.div``;

export const FindPassword = styled.div``;

export const Join = styled.div`
  cursor: pointer;
`;

export const Error = styled.div`
  padding-left: 16px;
  padding-top: 5px;
  color: red;
  font-size: 12px;
`;

export const Checkbox = styled.input``;

export const CheckboxWrapper = styled.div`
  padding-top: 20px;
`;

export const SocialLogin = styled.img`
  margin-top: 20px;
  width: 100%;
  height: 64px;
  border-radius: 15px;
`;
