import { useRouter } from "next/router";
import LayoutNavigationUI from "./LayoutNavigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMain = () => {
    router.push("/");
  };

  const onClickBoard = () => {
    router.push("/board/list");
  };

  const onClickUsedMarket = () => {
    router.push("/market/list");
  };

  const onClickMypage = () => {
    router.push("/mypage/");
  };
  return (
    <LayoutNavigationUI
      onClickMain={onClickMain}
      onClickBoard={onClickBoard}
      onClickUsedMarket={onClickUsedMarket}
      onClickMypage={onClickMypage}
    />
  );
}
