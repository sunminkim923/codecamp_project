//@ts-nocheck
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import ImageUpload from "../../../commons/imageupload/imageupload";
import {
  Wrapper,
  PageWrapper,
  BoardTitle,
  TopWrapper,
  WriterWrapper,
  Text,
  WriterInput,
  PasswordWrapper,
  PasswordInput,
  TitleWrapper,
  Title,
  ContentsWrapper,
  Contents,
  AddressWrapper,
  ZipCodeWrapper,
  ZipCode,
  SearchAddress,
  Address,
  AddressDetail,
  YoutubeWrapper,
  Youtube,
  UploadWrapper,
  Upload,
  RadioWrapper,
  Radio,
  Text02,
  SubmitButtonWrapper,
  SubmitButton,
  Error,
} from "./boardWrite.styles";

// @ts-ignore
export default function BoardWriteUI(props) {
  return (
    <>
      <PageWrapper>
        <Wrapper>
          <form
            onSubmit={props.handleSubmit(
              !props.isEdit ? props.onSubmit : props.onEdit
            )}
          >
            <BoardTitle>게시물 등록</BoardTitle>
            <TopWrapper>
              <WriterWrapper>
                <Text>작성자</Text>
                <WriterInput
                  placeholder="이름을 입력해주세요"
                  type="text"
                  {...props.register("writer")}
                  // readOnly={props.data?.fetchBoard.writer}
                />
                <Error>{props.errors.writer?.message}</Error>
              </WriterWrapper>
              <PasswordWrapper>
                <Text>비밀번호</Text>
                <PasswordInput
                  placeholder="비밀번호를 입력해주세요"
                  type="password"
                  {...props.register("password")}
                />
                <Error>{props.errors.password?.message}</Error>
              </PasswordWrapper>
            </TopWrapper>
            <TitleWrapper>
              <Text>제목</Text>
              <Title
                placeholder="제목을 입력해주세요"
                type="text"
                {...props.register("title")}
              />
              <Error>{props.errors.title?.message}</Error>
            </TitleWrapper>
            <ContentsWrapper>
              <Text>내용</Text>
              <Contents
                placeholder="내용을 입력해주세요"
                type="text"
                {...props.register("contents")}
              />
              <Error>{props.errors.contents?.message}</Error>
            </ContentsWrapper>
            <AddressWrapper>
              <Text>주소</Text>
              <ZipCodeWrapper>
                <ZipCode
                  address={props.address}
                  placeholder={props.address ? props.zipCode : "우편번호"}
                  {...props.register("zipCode")}
                  readOnly
                />
                <SearchAddress
                  type="button"
                  onClick={props.onClicksearchAdress}
                >
                  주소 검색하기
                </SearchAddress>
              </ZipCodeWrapper>
              {props.isModal && (
                <Modal
                  text="주소를 입력하세요"
                  visible={props.isModal}
                  onOk={props.onClickCancel}
                  onCancel={props.onClickCancel}
                >
                  <DaumPostcode onComplete={props.onComplete} />
                </Modal>
              )}
              <Address
                address={props.address}
                placeholder={
                  props.address ? props.address : "주소를 검색해주세요"
                }
                {...props.register("address")}
                readOnly
              />
              <AddressDetail
                {...props.register("addressDetail")}
                placeholder="상세주소를 입력해주세요"
              />
            </AddressWrapper>
            <YoutubeWrapper>
              <Text>유튜브</Text>
              <Youtube
                type="text"
                placeholder="링크를 입력하세요"
                {...props.register("youtubeUrl")}
              />
            </YoutubeWrapper>
            <Text>사진첨부</Text>
            <UploadWrapper>
              <ImageUpload setImageFile={props.setImageFile} />
            </UploadWrapper>
            {/* <RadioWrapper>
              <Text>메인설정</Text>
              <Radio type="radio" name="radio" id="youtube" />
              <lavel for="youtube">유튜브</lavel>
              <Radio type="radio" name="radio" />
              <Text02>사진</Text02>
            </RadioWrapper> */}
            <SubmitButtonWrapper>
              <SubmitButton type="submit" isActive={props.isActive}>
                {props.isEdit ? "수정하기" : "등록하기"}
              </SubmitButton>
            </SubmitButtonWrapper>
          </form>
        </Wrapper>
      </PageWrapper>
    </>
  );
}
