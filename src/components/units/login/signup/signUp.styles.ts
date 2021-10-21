//@ts-nocheck
import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 384px;
  margin: auto;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 20px;
`;

export const Text = styled.div`
  padding-top: 20px;
  font-size: 16px;
  font-weight: 400;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 64px;
  margin-top: 12px;
  padding-left: 16px;
  border-radius: 15px;
`;
//@ts-ignore
export const JoinButton = styled.button`
  margin-top: 60px;
  width: 100%;
  height: 64px;
  border: 1px solid lightgray;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 700;
  background-color: ${(props) => (props.isActive ? "#ffd600" : "")};
`;

export const Error = styled.div`
  color: red;
  padding-top: 5px;
  padding-left: 16px;
  font-size: 12px;
`;
