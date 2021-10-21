// @ts-nocheck
import CommentWrite from "./comment/commentWrite/commentWrite.container";
import CommentList from "./comment/commentList/commentList.container";
import { Modal } from "antd";
import { getDate } from "../../../../commons/libraries/utils";
import { Tooltip } from "antd";
import {
  PageWrapper,
  Wrapper,
  HeadWrapper,
  ProfileWrapper,
  ProfileImg,
  WriterWrapper,
  Writer,
  Date,
  IconWrapper,
  Link,
  Location,
  UnderLine01,
  Title,
  ImageBox,
  Contents,
  YoutubeWrapper,
  YoutubeBox,
  LikeCountWrapper,
  LikeWrapper,
  DisLikeWrapper,
  LikeButton,
  LikeCount,
  DisLikeButton,
  DisLikeCount,
  ButtonWrapper,
  ListButton,
  EditButton,
  DeleteButton,
  UnderLine02,
} from "./boardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <>
      <PageWrapper>
        <Wrapper>
          <HeadWrapper>
            <ProfileWrapper>
              <ProfileImg src="/images/profile.svg/" />
              <WriterWrapper>
                <Writer> {props.data?.fetchBoard.writer} </Writer>
                <Date> Date: {getDate(props.data?.fetchBoard.createdAt)} </Date>
              </WriterWrapper>
            </ProfileWrapper>
            <IconWrapper>
              <Link src="/images/link.png" />

              <Tooltip
                placement="topRight"
                title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
              >
                <Location src="/images/location.png" />
              </Tooltip>
            </IconWrapper>
          </HeadWrapper>
          <UnderLine01 />
          <Title> {props.data?.fetchBoard.title} </Title>
          {props.data?.fetchBoard.images.map((data) => (
            <ImageBox
              key={data}
              src={data ? `https://storage.googleapis.com/${data}` : ""}
            />
          ))}

          <Contents> {props.data?.fetchBoard.contents}</Contents>
          <YoutubeWrapper>
            <YoutubeBox
              url={
                props.data?.fetchBoard.youtubeUrl
                  ? props.data?.fetchBoard.youtubeUrl
                  : ""
              }
            />
          </YoutubeWrapper>
          <LikeCountWrapper>
            <LikeWrapper>
              <LikeButton
                src="/images/likeButton.png/"
                onClick={props.onClickLike}
              />
              <LikeCount> {props.data?.fetchBoard.likeCount} </LikeCount>
            </LikeWrapper>
            <DisLikeWrapper>
              <DisLikeButton
                src="/images/disLikeButton.png/"
                onClick={props.onClickDislike}
              />
              <DisLikeCount>{props.data?.fetchBoard.dislikeCount}</DisLikeCount>
            </DisLikeWrapper>
          </LikeCountWrapper>
        </Wrapper>
        <ButtonWrapper>
          <ListButton onClick={props.onClickList}>목록으로 </ListButton>
          <EditButton onClick={props.onClickEdit}>수정하기</EditButton>
          <DeleteButton onClick={props.onClickDelete}>삭제하기</DeleteButton>
          {props.isModal && (
            <Modal
              title="게시글 삭제"
              visible={props.isOpen}
              onOk={props.onClickOk}
              onCancel={props.onClickCancel}
            >
              <div>게시글을 삭제하시겠습니까?</div>
            </Modal>
          )}
        </ButtonWrapper>
        <UnderLine02 />
        <CommentWrite />
        <CommentList />
      </PageWrapper>
    </>
  );
}
