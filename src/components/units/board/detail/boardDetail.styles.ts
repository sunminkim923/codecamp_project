import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

export const PageWrapper = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

export const Wrapper = styled.div`
  padding: 80px 102px;
  width: 1200px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const HeadWrapper = styled.div`
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.div`
  width: 54px;
  height: 54px;
  font-size: 48px;
  text-align: center;
  display: flex;

  justify-content: center;
`;

export const WriterWrapper = styled.div`
  padding-left: 17px;
`;

export const Writer = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

export const Date = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #828282;
`;

export const IconWrapper = styled.div``;

export const Link = styled.img``;

export const Location = styled.img`
  padding-left: 30px;
`;

export const UnderLine01 = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid #bdbdbd;
`;

export const Title = styled.div`
  padding-top: 80px;
  padding-bottom: 40px;
  font-size: 36px;
  font-weight: 700;
`;

export const ImageBox = styled.img`
  width: 100%;
  height: 480px;
  background-color: #bdbdbd;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
`;

export const YoutubeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const YoutubeBox = styled(ReactPlayer)`
  width: 486px;
  height: 240px;
`;

export const LikeCountWrapper = styled.div`
  padding-top: 160px;
  display: flex;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  width: 585px;
  padding-top: 80px;
  padding-bottom: 87px;
  display: flex;
  justify-content: space-between;
`;

export const ListButton = styled.button`
  width: 179px;
  height: 45px;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  :hover {
    background-color: #1450f9;
    color: #ffffff;
    transition: 0.5s;
  }
`;

export const EditButton = styled.button`
  width: 179px;
  height: 45px;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  :hover {
    background-color: #1450f9;
    color: #ffffff;
    transition: 0.5s;
  }
`;

export const DeleteButton = styled.button`
  width: 179px;
  height: 45px;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  :hover {
    background-color: #1450f9;
    color: #ffffff;
    transition: 0.5s;
  }
`;

export const UnderLine02 = styled.div`
  width: 1199px;
  height: 1px;
  border-top: 1px solid #bdbdbd;
`;

export const RecommendWrapper = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
`;

export const LikeWrapper = styled.div`
  width: 60px;
  height: 80px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const DisLikeWrapper = styled.div`
  width: 60px;
  height: 80px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LikeBoardIcon = styled(FaRegThumbsUp)`
  font-size: 36px;
  cursor: pointer;
  :hover {
    color: #1450f9;
  }
`;

export const LikeBoardCount = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

export const DisLikeBoardIcon = styled(FaRegThumbsDown)`
  font-size: 36px;
  cursor: pointer;
  :hover {
    color: red;
  }
`;

export const DisLikeBoardCount = styled.div`
  font-size: 22px;
  font-weight: 600;
`;
