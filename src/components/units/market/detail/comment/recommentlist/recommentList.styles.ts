import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const CommentWrapper = styled.div`
  width: 1200px;
  padding-left: 64px;
  display: flex;
  align-items: center;
  padding-top: 30px;
`;

export const ArrowImg = styled.img`
  width: 15px;
  height: 17px;
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
  padding-left: 160px;
  color: #bdbdbd;
`;

export const EditButtonWrapper = styled.div``;

export const DeleteButton = styled.img`
  /* width: 20px;
  height: 20px; */
  margin-left: 20px;
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
  background-color: #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
    transition: 0.25s;
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
