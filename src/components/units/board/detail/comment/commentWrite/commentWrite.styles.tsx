import styled from "@emotion/styled";
import { Rate } from "antd";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  padding-top: 45px;
  width: 1200px;
`;

export const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 42px;
`;

export const CommentIcon = styled.img``;

export const Title = styled.div`
  padding-left: 14px;
  font-size: 18px;
  font-weight: 500;
`;

export const WriterWrapper = styled.div`
  width: 526px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WriterInput = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #f2f2f2;
  padding-left: 20px;
`;

export const StarPoint = styled(Rate)``;

export const InputWrapper = styled.div`
  border: 1px solid #f2f2f2;
  margin-top: 22px;
`;

export const Input = styled.input`
  width: 100%;
  height: 108px;
  border: none;
  padding-left: 20px;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f2f2f2;
`;

export const TextLength = styled.div`
  color: #bdbdbd;
  padding-left: 20px;
`;

export const SubmitButton = styled.button`
  width: 91px;
  height: 52px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
    transition: 0.5s;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ExitButton = styled.img`
  cursor: pointer;
`;
