import styled from "@emotion/styled";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import { NumberWithCommas } from "../../../commons/libraries/utils";
const Wrapper = styled.div`
  width: 196px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding-top: 20px;
`;

const ProductWrapper = styled.div`
  padding: 10px;
  width: 156px;
  height: 199px;
  margin-top: 20px;
  border: 1px solid #bdbdbd;
`;

const HeartPointWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Heart = styled.img``;

const HeartPoint = styled.div`
  padding-left: 5.5px;
`;

const BodyWrapper = styled.div`
  padding-top: 4px;
  display: flex;
  justify-content: center;
`;

const ProductImg = styled.img`
  width: 60px;
  height: 60px;
  background-color: #f2f2f2;
`;

const ProductName = styled.div`
  padding-top: 12px;
  font-size: 12px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Remarks = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #4f4f4f;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Price = styled.div`
  padding-top: 4px;
  font-size: 16px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Tags = styled.div`
  padding-top: 8px;
  font-size: 10px;
  font-weight: 500;
  color: #bdbdbd;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const HeartIcon = styled(FaHeart)`
  color: #1450f9;
`;

export default function ViewedProduct(props: any) {
  return (
    <>
      <Wrapper>
        <Title>오늘 본 상품</Title>
        {props?.baskets?.map((data: any) => (
          <ProductWrapper key={data?._id} onClick={props.onClickProduct}>
            <HeartPointWrapper>
              <HeartIcon />
              <HeartPoint>{data?.pickedCount}</HeartPoint>
            </HeartPointWrapper>
            <BodyWrapper>
              <ProductImg
                src={
                  data.images[0]
                    ? `https://storage.googleapis.com/${data.images[0]}`
                    : "/images/mainIMG.jpg"
                }
              />
            </BodyWrapper>
            <ProductName>{data?.name}</ProductName>
            <Remarks> {data?.remarks} </Remarks>
            <Price> {NumberWithCommas(data?.price)} 원 </Price>
            <Tags> {data?.tags} </Tags>
          </ProductWrapper>
        ))}
      </Wrapper>
    </>
  );
}
