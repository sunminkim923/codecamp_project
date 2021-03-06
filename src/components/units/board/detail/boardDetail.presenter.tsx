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
import { IQueryData } from "./boardDetail.container";
import { SetStateAction } from "react";

interface IProps {
  onClickList: () => void;
  data: IQueryData | undefined;
  onClickEdit: () => void;
  onClickDelete: () => void;
  onClickCancel: () => void;
  onClickOk: () => Promise<void>;
  isModal: boolean;
  isOpen: boolean;
  onClickLike: () => void;
  onClickDislike: () => void;
}

export default function BoardDetailUI(props: IProps) {
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
          {props.data?.fetchBoard.images.map((data: string) => (
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
          <ListButton onClick={props.onClickList}>???????????? </ListButton>
          <EditButton onClick={props.onClickEdit}>????????????</EditButton>
          <DeleteButton onClick={props.onClickDelete}>????????????</DeleteButton>
          {props.isModal && (
            <Modal
              title="????????? ??????"
              visible={props.isOpen}
              onOk={props.onClickOk}
              onCancel={props.onClickCancel}
            >
              <div>???????????? ?????????????????????????</div>
            </Modal>
          )}
        </ButtonWrapper>
        <UnderLine02 />
        <CommentWrite
          isEdit={false}
          data={undefined}
          setIsEdit={function (value: SetStateAction<boolean>): void {
            throw new Error("Function not implemented.");
          }}
          onClickExit={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <CommentList />
      </PageWrapper>
    </>
  );
}

// export const getServerSideProps = async (context: any) => {
//   const result = await request(
//     "https://.codebootcamp.co.kr/graphql05",
//     FETCH_BOARD,
//     {
//       boardId: context.query.Id,
//     }
//   );

//   return { props: { fetchBoard: result.fetchBoard } };
// };
