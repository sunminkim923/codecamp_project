import { useForm } from "react-hook-form";
import LoginUI from "./login.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./login.queries";
import { Modal } from "antd";
import router from "next/router";
import { GlobalContext } from "../../../../../pages/_app";
import { useContext } from "react";

export default function Login() {
  //@ts-ignore
  const { setAccessToken } = useContext(GlobalContext);
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
  const client = useApolloClient();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("이메일을 입력해주세요")
      .required("이메일을 입력해주세요"),
    password: yup.string().required("비밀번호를 입력해주세요"),
  });

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [loginUser] = useMutation(LOGIN_USER);

  //@ts-ignore
  async function onSubmit(data) {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      // const LoggedinUser = await client.query({
      //   query: FETCH_USER_LOGGED_IN,
      //   context: {
      //     headers: {
      //       authorization: `Bearer ${result.data?.loginUser.accessToken}`,
      //     },
      //   },
      // });
      setAccessToken(result.data?.loginUser.accessToken || "");
      localStorage.setItem("refreshToken", "true");

      // Modal.info({
      //   content: `${LoggedinUser.data?.fetchUserLoggedIn.name} 님 반갑습니다.`,
      // });
      Modal.info({ content: "로그인에 성공하였습니다" });
      router.push("./market/list/");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  }

  function onClickSignUp() {
    router.push("/login/signup");
  }

  return (
    <LoginUI
      handleSubmit={handleSubmit}
      register={register}
      onSubmit={onSubmit}
      isActive={formState.isValid}
      errors={formState.errors}
      onClickSignUp={onClickSignUp}
    />
  );
}
