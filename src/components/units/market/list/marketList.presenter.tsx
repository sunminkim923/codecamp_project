import ViewedProduct from "../../../commons/viewed-product/viewedproduct";
import InfiniteScroll from "react-infinite-scroller";
import { NumberWithCommas } from "../../../../commons/libraries/utils";
import {
  PageWrapper,
  Wrapper,
  Title,
  BestProductWrapper,
  BestProduct,
  BestProductImg,
  BestProductInfoWrapper,
  BestProductName,
  BestProductInfoBottomWrapper,
  BestProductCharacterWrapper,
  BestProductRemarks,
  BestProductPrice,
  BestProductHeartPointWrapper,
  BestProductHeart,
  BestProductHeartPoint,
  ProductListWrapper,
  TopWrapper,
  TextWrapper,
  SearchWrapper,
  Text01,
  Text02,
  SearchInput,
  SearchDate,
  SearchButton,
  ProductWrapper,
  ProductImg,
  ProductExplanationWrapper,
  ProductName,
  ProductCharacter,
  ProductTag,
  ProfileWrapper,
  ProfileImg,
  HeartPoint,
  ContentsWrapper,
  PriceWrapper,
  Price,
  SubmitButtonWrapper,
  SubmitButton,
  StickyWrapper,
  InfiniteScrollWrapper,
  Keyword,
  BestProductHeartIcon,
  ProductHeartIcon,
  ProfileIcon,
} from "./marketList.styles";

import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/typs/generated/types";

interface IProps {
  data: IQuery | undefined;
  newData: IQuery | undefined;
  onClickSubmit: () => void;
  onClickBestProduct: (data: { data: string; _id: string }) => void;
  onClickProduct: (data: { data: string; _id: string }) => void;
  onLoadMore: () => void;
  hasMore: boolean;
  onClickSelling: () => void;
  onClickSold: () => void;
  soldItem: boolean;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
  baskets: string | undefined;
  viewedItem: boolean;
}

export default function MarketListUI(props: IProps) {
  return (
    <PageWrapper>
      <Wrapper>
        <Title>베스트상품</Title>
        <BestProductWrapper>
          {props.newData?.fetchUseditemsOfTheBest.map((data: string | any) => (
            <BestProduct
              key={data._id}
              onClick={() => props.onClickBestProduct(data)}
            >
              <BestProductImg
                src={
                  data.images[0]
                    ? `https://storage.googleapis.com/${data.images[0]}`
                    : "/images/mainIMG.jpg"
                }
              />
              <BestProductInfoWrapper>
                <BestProductName>{data.name}</BestProductName>
                <BestProductInfoBottomWrapper>
                  <BestProductCharacterWrapper>
                    <BestProductRemarks>{data.remarks}</BestProductRemarks>
                    <BestProductPrice>
                      {NumberWithCommas(data.price)} 원
                    </BestProductPrice>
                  </BestProductCharacterWrapper>
                  <BestProductHeartPointWrapper>
                    <BestProductHeartIcon />
                    <BestProductHeartPoint>
                      {data.pickedCount}
                    </BestProductHeartPoint>
                  </BestProductHeartPointWrapper>
                </BestProductInfoBottomWrapper>
              </BestProductInfoWrapper>
            </BestProduct>
          ))}
        </BestProductWrapper>
        <ProductListWrapper>
          <TopWrapper>
            <TextWrapper>
              <Text01 onClick={props.onClickSelling} soldItem={props.soldItem}>
                판매중상품
              </Text01>
              <Text02 onClick={props.onClickSold} soldItem={props.soldItem}>
                판매된상품
              </Text02>
            </TextWrapper>
            <SearchWrapper>
              <SearchInput
                placeholder="상품명을 검색해주세요"
                onChange={props.onChangeSearch}
              />
              {/* <SearchDate>2020.12.02 ~ 2020.12.02</SearchDate> */}
              <SearchButton>검색</SearchButton>
            </SearchWrapper>
          </TopWrapper>
          <InfiniteScrollWrapper>
            {!props.soldItem && (
              <InfiniteScroll
                pageStart={0}
                loadMore={props.onLoadMore}
                hasMore={props.hasMore}
                loader={
                  <div className="loader" key={0}>
                    Loading ...
                  </div>
                }
                useWindow={false}
              >
                {props.data?.fetchUseditems.map((data: string | any) => (
                  <ProductWrapper
                    key={data._id}
                    onClick={() => props.onClickProduct(data)}
                  >
                    <ProductImg
                      src={
                        data.images[0]
                          ? `https://storage.googleapis.com/${data.images[0]}`
                          : "/images/mainIMG.jpg"
                      }
                    />
                    <ProductExplanationWrapper>
                      <ContentsWrapper>
                        <ProductName>
                          {data.name
                            .replaceAll(props.keyword, `$!${props.keyword}$!`)
                            .split("$!")
                            .map((keywordData: string | any, index: number) => (
                              <Keyword
                                id={keywordData._id}
                                key={index}
                                isMatched={props.keyword === keywordData}
                                onClick={() => props.onClickProduct(data)}
                              >
                                {keywordData}
                              </Keyword>
                            ))}
                        </ProductName>
                        <ProductCharacter>{data.remarks}</ProductCharacter>
                        <ProductTag>{data.tags}</ProductTag>
                        <ProfileWrapper>
                          <ProfileIcon />
                          {data?.seller?.name}
                          <ProductHeartIcon />
                          {data.pickedCount}
                        </ProfileWrapper>
                      </ContentsWrapper>
                      <PriceWrapper>
                        <Price>{NumberWithCommas(data.price)} 원</Price>
                      </PriceWrapper>
                    </ProductExplanationWrapper>
                  </ProductWrapper>
                ))}
              </InfiniteScroll>
            )}
            {props.soldItem && (
              <InfiniteScroll
                pageStart={0}
                loadMore={props.onLoadMore}
                hasMore={props.hasMore}
                loader={
                  <div className="loader" key={0}>
                    Loading ...
                  </div>
                }
                useWindow={false}
              >
                {props.data?.fetchUseditems.map((data: string | any) => (
                  <ProductWrapper
                    key={data._id}
                    onClick={() => props.onClickProduct(data)}
                  >
                    <ProductImg
                      src={
                        data.images[0]
                          ? `https://storage.googleapis.com/${data.images[0]}`
                          : " "
                      }
                    />
                    <ProductExplanationWrapper>
                      <ContentsWrapper>
                        <ProductName>
                          {data.name
                            .replaceAll(props.keyword, `$!${props.keyword}$!`)
                            .split("$!")
                            .map((keywordData: string | any, index: number) => (
                              <Keyword
                                id={keywordData._id}
                                key={index}
                                isMatched={props.keyword === keywordData}
                                onClick={() => props.onClickProduct(data)}
                              >
                                {keywordData}
                              </Keyword>
                            ))}
                        </ProductName>
                        <ProductCharacter>{data.remarks}</ProductCharacter>
                        <ProductTag>{data.tags}</ProductTag>
                        <ProfileWrapper>
                          <ProfileImg src="/images/profile-small.svg" />
                          {data.seller?.name}
                          <HeartPoint src="/images/heart-small.svg" />
                          {data.pickedCount}
                        </ProfileWrapper>
                      </ContentsWrapper>
                      <PriceWrapper>
                        <Price>{data.price} 원</Price>
                      </PriceWrapper>
                    </ProductExplanationWrapper>
                  </ProductWrapper>
                ))}
              </InfiniteScroll>
            )}
          </InfiniteScrollWrapper>
          <SubmitButtonWrapper>
            <SubmitButton onClick={props.onClickSubmit}>
              상품등록하기
            </SubmitButton>
          </SubmitButtonWrapper>
        </ProductListWrapper>
      </Wrapper>
      <StickyWrapper>
        <ViewedProduct
          baskets={props.baskets}
          viewedItem={props.viewedItem}
          onClickProduct={props.onClickProduct}
        ></ViewedProduct>
      </StickyWrapper>
    </PageWrapper>
  );
}
