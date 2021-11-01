import styled from "@emotion/styled";
import { FaTimes, FaLevelUpAlt } from "react-icons/fa";

export const Wrapper = styled.div`
  padding-top: 20px;
  padding-left: 65px;
  display: flex;
`;

export const InputWrapper = styled.div`
  width: 1095px;
  height: 117px;
  border: 1px solid #bdbdbd;
  margin-left: 25px;
`;

export const RecommentInput = styled.input`
  width: 100%;
  height: 64px;
  border: none;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 500;
`;

export const BottomWrapper = styled.div`
  border-top: 1px solid #f2f2f2;
  padding-left: 20px;
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextLength = styled.div`
  color: #bdbdbd;
`;

export const SubmitButton = styled.button`
  width: 91px;
  height: 100%;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #1450f9;
    color: #ffffff;
    transition: 0.5s;
  }
`;
export const ExitWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ExitIcon = styled(FaTimes)`
  cursor: pointer;
`;

export const ArrowIcon = styled(FaLevelUpAlt)`
  transform: rotate(90deg);
  margin-top: 30px;
  font-size: 20px;
`;
