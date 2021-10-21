import { useQuery } from "@apollo/client";
import { useState } from "react";
import SideMenuUI from "./mypage.presenter";
import { FETCH_USER_LOGGED_IN } from "./mypage.queries";

export default function SideMenu() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const [isModal, setIsModal] = useState(false);

  const onClickCharge = () => {
    setIsModal(true);
  };

  const onClickClose = () => {
    setIsModal(false);
  };

  const onClickExit = () => {
    setIsModal(false);
  };

  return (
    <SideMenuUI
      data={data}
      isModal={isModal}
      onClickCharge={onClickCharge}
      onClickClose={onClickClose}
      onClickExit={onClickExit}
      setIsModal={setIsModal}
    />
  );
}
