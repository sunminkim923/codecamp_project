import { useEffect } from "react";
import BoardList from "../../../src/components/units/board/list/boardList.container";
import Head from "next/head";
export default function ListPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="MOCAR" />
        <meta
          property="og:image"
          content="https://mocar.shop/images/boardIMG.jpg"
        />

        <meta property="og:url" content="https://mocar.shop" />
        <meta
          property="og:description"
          content="자동차를 사랑하는 사람들의 커뮤니티 MOCAR 입니다."
        />
      </Head>
      <BoardList />
    </>
  );
}
