import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const router = useRouter();

  const [userLoggedIn, setUserLoggedIn] = useState<string | null>();

  const [logoutUser] = useMutation(LOGOUT_USER);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    return setUserLoggedIn(localStorage.getItem("refreshToken"));
  }, [data]);

  const onClickLogin = () => {
    router.push("/login/");
  };

  const onClickLogo = () => {};

  const onClickSignup = () => {
    router.push("/login/signup/");
  };

  const onClickLogout = async () => {
    try {
      await logoutUser({
        refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
          },
        ],
      });
      Modal.info({ content: "로그아웃 되었습니다." });
      router.push("/board/list");
      localStorage.removeItem("refreshToken");
    } catch (error) {
      //@ts-ignore
      Modal.error({ content: error.message });
    }
  };

  const onClickName = () => {
    router.push("/mypage/");
  };

  const onClickPoint = () => {
    router.push("/mypage/");
  };

  return (
    <LayoutHeaderUI
      onClickLogin={onClickLogin}
      onClickLogo={onClickLogo}
      onClickSignup={onClickSignup}
      data={data}
      onClickLogout={onClickLogout}
      userLoggedIn={userLoggedIn}
      onClickPoint={onClickPoint}
      onClickName={onClickName}
    />
  );
}
