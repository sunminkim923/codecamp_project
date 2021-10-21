//@ts-nocheck
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 980px;
  /* padding-top: 60px; */
  padding-left: 126px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-top: 40px; */
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const Input = styled.input`
  width: 690px;
  height: 52px;
  padding-left: 20px;
  font-size: 16px;
  border: none;
  background-color: #e0e0e0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ChangeButton = styled.button`
  width: 180px;
  height: 52px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  background-color: ${(props) => (props.isActive ? "#ffd600" : "")};
`;

export const InputBox = styled.div``;

export const Error = styled.div`
  color: red;
  padding-left: 20px;
  padding-top: 5px;
`;
