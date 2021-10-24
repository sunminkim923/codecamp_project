import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  padding-top: 30px;
`;

export const HeadWrapper = styled.div`
  display: flex;
  padding-left: 4px;
`;

export const ProfileImg = styled.img``;

export const ContentsWrapper = styled.div`
  padding-left: 16px;
  width: 100%;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Writer = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const Contents = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommentEdit = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

export const ReComment = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

export const CommentDelete = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

export const WritedDate = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #bdbdbd;
  padding-left: 60px;
  padding-top: 20px;
`;

export const UnderLine = styled.div`
  border-bottom: 1px solid #dbdbdb;
  padding-top: 30px;
`;

export const EditWrapper = styled.div``;

export const InputWrapper = styled.div`
  width: 1200px;
  height: 117px;
  border: 1px solid #bdbdbd;
`;

export const CommentInput = styled.input`
  width: 100%;
  height: 64px;
  border: none;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
`;

export const SubmitWrapper = styled.div`
  width: 1200px;
  height: 52px;
  border-top: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 3px;
`;

export const TextLength = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
`;

export const SubmitButton = styled.button`
  width: 91px;
  height: 100%;
  background-color: #bdbdbd;
  border: 1px solid #bdbdbd;
  :hover {
    background-color: #ffd600;
    transition: 0.25s;
  }
`;

export const ExitWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 10px;
`;

export const ExitButton = styled.img`
  cursor: pointer;
`;

export const CommentEditWrapper = styled.div``;

export const RecommentWrapper = styled.div`
  padding-left: 20px;
`;

export const CommentDeleteWrapper = styled.div`
  padding-left: 20px;
`;
