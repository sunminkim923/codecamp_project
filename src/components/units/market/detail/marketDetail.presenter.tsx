import {
  PageWrapper,
  Wrapper,
  HeadWrapper,
  ProfileWrapper,
  Profile,
  WriterWrapper,
  LocationWrapper,
  Icon01,
  Location,
  UnderLine,
  ProductTitleWrapper,
  TitleWrapper,
  Character,
  Product,
  LikePointWrapper,
  LikeHeart,
  LikePoint,
  Price,
  ProductImageWrapper,
  ImageWrapper,
  ProductExplanation,
  ProductTag,
  Map,
  ButtonWrapper,
  BuyerButtonWrapper,
  ButtonWrapperBuyer,
  ListButton,
  EditButton,
  DeleteButton,
  BuyButton,
  MapAddress,
  SellerName,
  SellerDate,
  ProfileIcon,
  HeartIcon,
} from "./marketDetail.styles";
import CommentWrite from "./comment/commentwrite/commentwrite.container";
import CommentList from "./comment/commentlist/commentlist.container";
import ReComment from "./comment/recommentlist/recommentList.contatiner";
import { Modal } from "antd";
import { getDate } from "../../../../commons/libraries/utils";
import { IQueryData } from "./marketDetail.container";

interface IProps {
  data: IQueryData | undefined;
  onClickToggle: () => void;
  onClickList: () => void;
  onClickEdit: () => void;
  onClickDelete: () => void;
  onClickOk: any;
  onClickCancel: () => void;
  isModal: boolean;
  isOpen: boolean;
  marketSeller: string | undefined;
  loggedInUser: string | undefined;
  onClickBuyItem: () => void;
  onClickBuyItemOk: () => Promise<void>;
}

export default function MarketDetailUI(props: IProps) {
  return (
    <>
      <PageWrapper>
        <Wrapper>
          <HeadWrapper>
            <ProfileWrapper>
              <ProfileIcon />
              <WriterWrapper>
                <SellerName>
                  {props.data?.fetchUseditem.seller?.name}
                </SellerName>
                <SellerDate>
                  {getDate(props.data?.fetchUseditem.createdAt)}
                </SellerDate>
              </WriterWrapper>
            </ProfileWrapper>
          </HeadWrapper>
          <UnderLine></UnderLine>
          <ProductTitleWrapper>
            <TitleWrapper>
              <Character>{props.data?.fetchUseditem.remarks}</Character>
              <Product>{props.data?.fetchUseditem.name}</Product>
            </TitleWrapper>
            <LikePointWrapper>
              <HeartIcon onClick={props.onClickToggle} />
              <LikePoint>{props.data?.fetchUseditem.pickedCount}</LikePoint>
            </LikePointWrapper>
          </ProductTitleWrapper>
          <Price>{props.data?.fetchUseditem.price}원</Price>
          <ProductImageWrapper>
            {props.data?.fetchUseditem.images.map((data) => (
              <ImageWrapper
                key={data}
                src={data ? `https://storage.googleapis.com/${data}` : ""}
              />
            ))}
          </ProductImageWrapper>
          <ProductExplanation
            dangerouslySetInnerHTML={{
              __html: props.data?.fetchUseditem.contents,
            }}
          ></ProductExplanation>
          <ProductTag>{props.data?.fetchUseditem.tags}</ProductTag>
          <UnderLine />
          <Map id="map" />
          <MapAddress>
            거래 희망 위치 :{" "}
            {props.data?.fetchUseditem.useditemAddress?.address}{" "}
            {props.data?.fetchUseditem.useditemAddress?.addressDetail}
          </MapAddress>
          <UnderLine />
          {props.marketSeller === props.loggedInUser && (
            <ButtonWrapper>
              <ListButton onClick={props.onClickList}>목록으로</ListButton>
              <EditButton onClick={props.onClickEdit}>수정하기</EditButton>
              {props.isModal && (
                <Modal
                  title="게시글삭제"
                  visible={props.isOpen}
                  onOk={props.onClickOk}
                  onCancel={props.onClickCancel}
                >
                  <div>게시글을 삭제하시겠습니까?</div>
                </Modal>
              )}
              <DeleteButton onClick={props.onClickDelete}>
                삭제하기
              </DeleteButton>
            </ButtonWrapper>
          )}
          {props.marketSeller !== props.loggedInUser && (
            <BuyerButtonWrapper>
              <ButtonWrapperBuyer>
                <ListButton onClick={props.onClickList}>목록으로</ListButton>
                <BuyButton onClick={props.onClickBuyItem}>구매하기</BuyButton>
                <Modal
                  title="상품구매"
                  visible={props.isOpen}
                  onOk={props.onClickBuyItemOk}
                  onCancel={props.onClickCancel}
                >
                  <div>상품을 구매하시겠습니까?</div>
                </Modal>
              </ButtonWrapperBuyer>
            </BuyerButtonWrapper>
          )}
        </Wrapper>
      </PageWrapper>
      <CommentWrite />
      <CommentList />
      <ReComment commentId={undefined} />
    </>
  );
}
