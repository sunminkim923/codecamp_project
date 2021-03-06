import styled from "@emotion/styled";
import {
  FaUserCircle,
  FaPencilAlt,
  FaTrash,
  FaTimes,
  FaCommentAlt,
  FaHeart,
  FaCommentDots,
  FaReply,
  FaLevelUpAlt,
} from "react-icons/fa";

export const Wrapper = styled.div``;

export const CommentWrapper = styled.div`
  width: 1200px;
  padding-left: 64px;
  display: flex;
  align-items: center;
  padding-top: 30px;
`;

export const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const ProfileImg = styled.img`
  padding-left: 30px;
`;

export const ContentsWrapper = styled.div`
  padding-left: 16px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const WriterWrapper = styled.div``;

export const WriterName = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const Contents = styled.div`
  font-size: 16px;
  font-weight: 400px;
  color: #4f4f4f;
`;

export const CreatedAt = styled.div`
  padding-left: 170px;
  color: #bdbdbd;
`;

export const EditButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DeleteButton = styled.img`
  width: 20px;
  height: 20px;

  cursor: pointer;
`;

export const EditButton = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const EditWrapper = styled.div`
  padding-top: 30px;
`;

export const EditCommentWrapper = styled.div`
  padding-left: 64px;
  display: flex;
  align-items: center;
`;

export const EditCommentInputWrapper = styled.div`
  width: 1096px;
  height: 117px;
  border: 1px solid #bdbdbd;
  margin-left: 25px;
`;

export const EditInput = styled.input`
  width: 100%;
  height: 64px;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  padding: 20px;
`;

export const EditSubmitWrapper = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
`;

export const EditText = styled.div`
  padding-top: 14px;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
`;

export const EidtSubmitButton = styled.button`
  width: 91px;
  height: 99%;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #1450f9;
    color: #ffffff;
    transition: 0.5s;
  }
`;

export const ExitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 10px;
`;

export const ExitButton = styled.img`
  cursor: pointer;
`;

export const EidtTooltopWrapper = styled.div``;

export const DeleteTooltipWrapper = styled.div`
  padding-left: 20px;
`;

export const ProfielIcon = styled(FaUserCircle)`
  font-size: 42px;
  margin-left: 30px;
`;

export const ArrowIcon = styled(FaLevelUpAlt)`
  transform: rotate(90deg);
  font-size: 20px;
`;

export const EditIcon = styled(FaPencilAlt)`
  cursor: pointer;
`;

export const DeleteIcon = styled(FaTrash)`
  cursor: pointer;
`;

export const ExitIcon = styled(FaTimes)``;
