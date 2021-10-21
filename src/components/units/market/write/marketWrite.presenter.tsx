import InputFullSize from "../../../commons/inputs/Input-full-size";
import TextAreaQuill from "../../../commons/inputs/input-react-quill";
import ImageUpload from "../../../commons/imageupload/imageupload";
import {
  PageWrapper,
  Wrapper,
  Title,
  InputWrapper,
  Text,
  TextInput,
  ExplanationTextArea,
  PriceWrapper,
  PositionWrapper,
  MapWrapper,
  Map,
  GpsAdressWrapper,
  GpsWrapper,
  Lattitude,
  Longitude,
  Local,
  AdressWrapper,
  AddressButtonWrapper,
  AddressSearchButton,
  ImageWrapper,
  SubmitWrapper,
  SubmitButton,
  EditButton,
  Error,
} from "./marketWrite.styles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

// @ts-ignore
export default function MarketWriteUI(props) {
  return (
    <PageWrapper>
      <Wrapper>
        <Title>{!props.isEdit ? "상품 등록하기" : "상품 수정하기"} </Title>
        <form
          onSubmit={props.handleSubmit(
            !props.isEdit ? props.onSubmit : props.onEdit
          )}
        >
          <InputWrapper>
            <Text>상품명</Text>
            <InputFullSize
              placeholder="상품명을 입력해주세요"
              type="text"
              register={{ ...props.register("productName") }}
              errorMessage={props.errors.productName?.message}
            />
          </InputWrapper>
          <InputWrapper>
            <Text>한줄요약</Text>
            <InputFullSize
              placeholder="상품의 특징을 입력해주세요"
              tpye="text"
              register={{ ...props.register("productCharacter") }}
              errorMessage={props.errors.productCharacter?.message}
            />
          </InputWrapper>
          <InputWrapper>
            <Text>상품설명</Text>
            <ExplanationTextArea
              {...props.register("productExplanation")}
              placeholder="상품을 설명해주세요"
            />
            <Error>{props.errors.productExplanation?.message}</Error>
          </InputWrapper>
          <PriceWrapper>
            <InputWrapper>
              <Text>판매가격</Text>
              <InputFullSize
                type="text"
                placeholder="가격을 입력하세요"
                register={{ ...props.register("price") }}
                errorMessage={props.errors.price?.message}
              />
            </InputWrapper>
          </PriceWrapper>
          <InputWrapper>
            <Text>태그입력</Text>
            <TextInput
              type="text"
              placeholder="#태그 #태그 #태그"
              {...props.register("tags")}
            />
          </InputWrapper>
          <PositionWrapper>
            <MapWrapper>
              <Text>거래위치</Text>
              <Map id="map"></Map>
            </MapWrapper>
            <GpsAdressWrapper>
              <AdressWrapper>
                <AddressButtonWrapper>
                  <Text>주소</Text>
                  <AddressSearchButton
                    type="button"
                    onClick={props.onClickSearchAddress}
                  >
                    주소검색
                  </AddressSearchButton>
                  {props.isModal && (
                    <Modal
                      visible={true}
                      onOk={props.onClickCancel}
                      onCancel={props.onClickCancel}
                    >
                      <DaumPostcode onComplete={props.onComplete} autoClose />
                    </Modal>
                  )}
                </AddressButtonWrapper>
                <TextInput
                  placeholder={
                    props.address ? props.address : "주소를 검색해주세요"
                  }
                  {...props.register("address")}
                  value={props.address ? props.address : ""}
                  // readOnly
                  // value={props.address ? props.address : ""}
                />
                <Error>{props.errors.address?.message}</Error>
                <TextInput
                  type="text"
                  placeholder="상세주소를 입력하세요."
                  {...props.register("addressDetail")}
                />
                <Error>{props.errors.addressDetail?.message}</Error>
              </AdressWrapper>
            </GpsAdressWrapper>
          </PositionWrapper>
          <ImageWrapper>
            <Text>사진첨부</Text>
            <ImageUpload setImageFile={props.setImageFile} />
          </ImageWrapper>
          <SubmitWrapper>
            {!props.isEdit && (
              //@ts-ignore
              <SubmitButton type="submit" isActive={props.isActive}>
                등록하기
              </SubmitButton>
            )}
            {props.isEdit && (
              //@ts-ignore
              <EditButton type="submit" isActive={props.isActive}>
                수정하기
              </EditButton>
            )}
          </SubmitWrapper>
        </form>
      </Wrapper>
    </PageWrapper>
  );
}
