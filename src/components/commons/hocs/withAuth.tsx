import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

// eslint-disable-next-line react/display-name
const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      Modal.error({ content: "로그인이 필요한 페이지입니다." });
      router.push("/login/");
    }
  });
  if (typeof window !== "undefined" && !localStorage.getItem("refreshToken")) {
    router.push("/login/");
  }

  return <Component {...props} />;
};

export default withAuth;
