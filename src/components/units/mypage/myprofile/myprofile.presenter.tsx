import {
  Wrapper,
  Title,
  InputWrapper,
  Text,
  Input,
  ButtonWrapper,
  ChangeButton,
  InputBox,
  Error,
} from "./myprofile.styles";

export default function MyProfilePageUI(props: any) {
  return (
    <>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Wrapper>
          <Title>비밀번호 변경</Title>
          <InputWrapper>
            <Text>현재 비밀번호</Text>
            <InputBox>
              <Input
                type="password"
                placeholder="현재비밀번호를 입력해주세요"
                {...props.register("password")}
              />
              <Error>{props.errors.password?.message}</Error>
            </InputBox>
          </InputWrapper>
          <InputWrapper>
            <Text>새 비밀번호</Text>
            <InputBox>
              <Input
                type="password"
                placeholder="새 비밀번호를 입력해주세요"
                onChange={props.onChangeNewPassword}
                {...props.register("newPassword")}
              />
              <Error>{props.errors.newPassword?.message}</Error>
            </InputBox>
          </InputWrapper>
          <InputWrapper>
            <Text>새 비밀번호 확인</Text>
            <InputBox>
              <Input
                type="password"
                placeholder="새 비밀번호를 확인해주세요"
                onChange={props.onChangeNewPassowrdConfirm}
                {...props.register("newPasswordConfirm")}
              />
              <Error>{props.errors.newPasswordConfirm?.message}</Error>
            </InputBox>
          </InputWrapper>
          <ButtonWrapper>
            <ChangeButton
              type="submit"
              //@ts-ignore
              isActive={props.isActive}
            >
              비밀번호 변경
            </ChangeButton>
          </ButtonWrapper>
        </Wrapper>
      </form>
    </>
  );
}
