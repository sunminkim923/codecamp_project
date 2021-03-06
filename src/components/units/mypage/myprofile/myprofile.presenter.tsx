import { ChangeEventHandler } from "react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
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

interface IProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
  onSubmit: (data: {
    newPassword: string;
    newPasswordConfirm: string;
  }) => Promise<void>;
  errors: DeepMap<FieldValues, FieldError>;
  isActive: boolean;
}

export default function MyProfilePageUI(props: IProps) {
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
                //@ts-ignore
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
                //@ts-ignore
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
