//@ts-nocheck
import { Modal, Tooltip } from "antd";
import {
  PageWrapper,
  Wrapper,
  HeadWrapper,
  CommentIcon,
  Title,
  WriterWrapper,
  WriterInput,
  StarPoint,
  InputWrapper,
  Input,
  BottomWrapper,
  TextLength,
  SubmitButton,
  ExitButton,
  TopWrapper,
} from "./commentWrite.styles";

export default function CommentWriteUI(props) {
  return (
    <PageWrapper>
      <form
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onEdit : props.onSubmit
        )}
      >
        <Wrapper>
          {!props.isEdit && (
            <HeadWrapper>
              <CommentIcon src="/images/comment_icon.png" />
              <Title>댓글</Title>
            </HeadWrapper>
          )}

          <TopWrapper>
            <WriterWrapper>
              {!props.isEdit ? (
                <WriterInput
                  type="text"
                  placeholder="작성자"
                  {...props.register("writer")}
                  onChange={props.onChangeInputWriter}
                />
              ) : (
                <WriterInput
                  type="text"
                  placeholder="작성자"
                  {...props.register("writer")}
                  onChange={props.onChangeInputWriter}
                  defaultValue={props.data?.writer}
                  readOnly
                />
              )}

              <WriterInput
                type="password"
                placeholder="비밀번호"
                {...props.register("password")}
                onChange={props.onChangeInputPassword}
                value={props.inputPassword}
              />
              <StarPoint
                onChange={props.onChangeRating}
                value={props.inputRating}
              />
            </WriterWrapper>
            {props.isEdit && (
              <Tooltip placement="top" title="취소">
                <ExitButton
                  src="/images/commentDelete.svg/"
                  onClick={props.onClickExit}
                />
              </Tooltip>
            )}
          </TopWrapper>

          <InputWrapper>
            <Input
              type="text"
              placeholder={
                props.isEdit
                  ? "수정할 댓글을 입력해주세요"
                  : "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              }
              {...props.register("contents")}
              onChange={props.onChangeInPutContents}
              value={props.inputContents}
            />
            <BottomWrapper>
              <TextLength> {props.commentLength} / 100</TextLength>
              <SubmitButton type="submit" id={props.data?._id}>
                {props.isEdit ? "수정하기" : "등록하기"}
              </SubmitButton>
            </BottomWrapper>
          </InputWrapper>
        </Wrapper>
      </form>
    </PageWrapper>
  );
}
