import { useRouter } from "next/router";
import { useEffect } from "react";

// eslint-disable-next-line react/display-name
const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      alert("로그인이 필요한 페이지입니다.");
      router.push("/login/");
    }
  });
  if (typeof window !== "undefined" && !localStorage.getItem("refreshToken")) {
    return;
  }

  return <Component {...props} />;
};

export default withAuth;
