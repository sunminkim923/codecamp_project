import styled from "@emotion/styled";
import { Rate } from "antd";

export const PageWrapper = styled.div``;

export const Wrapper = styled.div`
  padding-top: 26px;
  width: 1200px;
`;

export const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PofileImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const ContentsWrapper = styled.div`
  padding-left: 16px;
  width: 100%;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WriterName = styled.div`
  padding-right: 18px;
  font-size: 16px;
  font-weight: 500;
`;

export const StarPoint = styled(Rate)``;

export const ButtonWrapper = styled.div``;

export const EditButton = styled.img`
  cursor: pointer;
`;

export const DeleteButton = styled.img`
  cursor: pointer;
  margin-left: 16px;
`;

export const Contents = styled.div`
  padding-top: 6px;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;

export const CreateDate = styled.div`
  padding-left: 56px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 12px;
  font-weight: 400;
  color: #bdbdbd;
`;

export const UnderLine = styled.div`
  width: 100%;
  border-top: 1px solid #bdbdbd;
`;

export const ModalInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
