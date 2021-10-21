import withAuth from "../../src/components/commons/hocs/withAuth";
import SideMenu from "../../src/components/units/mypage/sidemenu/mypage.container";

function MypageIndex() {
  return <SideMenu />;
}

export default withAuth(MypageIndex);
