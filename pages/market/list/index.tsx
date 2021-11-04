import withAuth from "../../../src/components/commons/hocs/withAuth";
import MarketList from "../../../src/components/units/market/list/marketList.container";
import Head from "next/head";

function MarketListPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="MOCAR" />
        <meta
          property="og:image"
          content="https://mocar.shop/images/marketIMG.jpg"
        />

        <meta property="og:url" content="https://mocar.shop" />
        <meta
          property="og:description"
          content="자동차를 사랑하는 사람들의 커뮤니티 MOCAR 입니다."
        />
      </Head>
      <MarketList />
    </>
  );
}

export default withAuth(MarketListPage);
