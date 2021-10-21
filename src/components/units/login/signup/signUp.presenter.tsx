import {
  PageWrapper,
  Wrapper,
  Title,
  Text,
  InputBox,
  JoinButton,
  Error,
} from "./signUp.styles";

// @ts-ignore
export default function SignUpUI(props) {
  return (
    <PageWrapper>
      <Wrapper>
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
          <Title>회원가입</Title>
          <Text>이름</Text>
          <InputBox
            type="text"
            placeholder="이름을 입력하세요"
            {...props.register("name")}
          />
          <Error>{props.errors.name?.message}</Error>
          <Text>이메일</Text>
          <InputBox
            type="text"
            placeholder="이메일을 입력하세요"
            {...props.register("email")}
          />
          <Error>{props.errors.email?.message}</Error>
          <Text>비밀번호</Text>
          <InputBox
            type="password"
            placeholder="비밀번호를 입력하세요"
            {...props.register("password")}
          />
          <Error>{props.errors.password?.message}</Error>
          <Text>비밀번호 확인</Text>
          <InputBox
            type="password"
            placeholder="비밀번호를 입력하세요"
            {...props.register("confirmPassword")}
          />
          <Error>{props.errors.confirmPassword?.message}</Error>
          {/* @ts-ignore */}
          <JoinButton type="submit" isActive={props.isActive}>
            회원가입하기
          </JoinButton>
        </form>
      </Wrapper>
    </PageWrapper>
  );
}
