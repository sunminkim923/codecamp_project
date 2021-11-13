// @ts-nocheck
import CommentWrite from "./comment/commentWrite/commentWrite.container";
import CommentList from "./comment/commentList/commentList.container";
import { Modal } from "antd";
import { getDate } from "../../../../commons/libraries/utils";
import { Tooltip } from "antd";
import Head from "next/head";
import { request } from "graphql-request";
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
  ButtonWrapper,
  ListButton,
  EditButton,
  DeleteButton,
  UnderLine02,
  RecommendWrapper,
  LikeWrapper,
  DisLikeWrapper,
  LikeBoardIcon,
  LikeBoardCount,
  DisLikeBoardIcon,
  DisLikeBoardCount,
} from "./boardDetail.styles";
import { FaUserCircle } from "react-icons/fa";

export default function BoardDetailUI(props) {
  return (
    <>
      {/* <Head>
        <meta property="og:title" content={props.data?.fetchBoard.title} />
        <meta
          property="og:contents"
          content={props.data?.fetchBoard.contents}
        />
        <meta
          property="og:images"
          content={`https://storage.googleapis.com/${props.data?.fetchBoard.images[0]}`}
        />
      </Head> */}
      <PageWrapper>
        <Wrapper>
          <HeadWrapper>
            <ProfileWrapper>
              <ProfileImg>
                <FaUserCircle />
              </ProfileImg>

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
          <RecommendWrapper>
            <LikeWrapper>
              <LikeBoardIcon onClick={props.onClickLike} />
              <LikeBoardCount>
                {props.data?.fetchBoard.likeCount}
              </LikeBoardCount>
            </LikeWrapper>
            <DisLikeWrapper>
              <DisLikeBoardIcon onClick={props.onClickDislike} />
              <DisLikeBoardCount>
                {props.data?.fetchBoard.dislikeCount}
              </DisLikeBoardCount>
            </DisLikeWrapper>
          </RecommendWrapper>
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

// export const getServerSideProps = async (context: any) => {
//   const result = await request(
//     "https://backend02.codebootcamp.co.kr/graphql05",
//     FETCH_BOARD,
//     {
//       boardId: context.query.Id,
//     }
//   );

//   return { props: { fetchBoard: result.fetchBoard } };
// };
