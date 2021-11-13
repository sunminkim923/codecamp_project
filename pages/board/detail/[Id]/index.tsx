import BoardDetail from "../../../../src/components/units/board/detail/boardDetail.container";
import Head from "next/head";

export default function DetailPage(props: any) {
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
      <BoardDetail />
    </>
  );
}

export const getServerSideProps = () => {
  <div>hello</div>;
};
