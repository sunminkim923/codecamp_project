import { Modal } from "antd";
import { Dispatch, SetStateAction } from "react";
import DaumPostcode from "react-daum-postcode";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IQueryData } from "../../../../../pages/board/detail/[Id]/edit";
import ImageUpload from "../../../commons/imageupload/imageupload";
import {
  IOnCompleteData,
  IOnEditData,
  IOnSubmitData,
} from "./boardWrite.container";

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

interface IProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
  errors: DeepMap<FieldValues, FieldError>;
  onSubmit: (data: IOnSubmitData) => Promise<void>;
  isActive: boolean;
  setImageFile: Dispatch<SetStateAction<string[]>>;
  isEdit: boolean;
  onEdit: (data: IOnEditData) => Promise<void>;
  onClicksearchAdress: () => void;
  isModal: boolean;
  onClickCancel: () => void;
  onComplete: (data: IOnCompleteData) => void;
  address: string | any;
  zipCode: string;
  data: IQueryData | undefined;
}

export default function BoardWriteUI(props: IProps) {
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
                  // value={'관리자'}
                />
                <Error>{props.errors.writer?.message}</Error>
              </WriterWrapper>
              <PasswordWrapper>
                <Text>비밀번호</Text>
                <PasswordInput
                  placeholder="비밀번호를 입력해주세요"
                  type="password"
                  {...props.register("password")}
                  // value={'123123'}
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
                //@ts-ignore
                type="text"
                {...props.register("contents")}
              />
              <Error>{props.errors.contents?.message}</Error>
            </ContentsWrapper>
            <AddressWrapper>
              <Text>주소</Text>
              <ZipCodeWrapper>
                <ZipCode
                  isActive={false}
                  //@ts-ignore
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
                  //@ts-ignore
                  text="주소를 입력하세요"
                  visible={props.isModal}
                  onOk={props.onClickCancel}
                  onCancel={props.onClickCancel}
                >
                  <DaumPostcode onComplete={props.onComplete} />
                </Modal>
              )}
              <Address
                //@ts-ignore
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
                // value={'https://www.youtube.com/watch?v=2pN4hSdV7RU'}
              />
            </YoutubeWrapper>
            <Text>사진첨부</Text>
            <UploadWrapper>
              <ImageUpload setImageFile={props.setImageFile} />
            </UploadWrapper>

            <SubmitButtonWrapper>
              <SubmitButton
                type="submit"
                isActive={props.isActive}
                address={""}
              >
                {props.isEdit ? "수정하기" : "등록하기"}
              </SubmitButton>
            </SubmitButtonWrapper>
          </form>
        </Wrapper>
      </PageWrapper>
    </>
  );
}
