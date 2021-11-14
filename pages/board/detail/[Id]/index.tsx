import BoardDetail from "../../../../src/components/units/board/detail/boardDetail.container";
import Head from "next/head";
import request, { gql } from "graphql-request";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      images
    }
  }
`;

export default function DetailPage(props: any) {
  return (
    <>
      <Head>
        <meta property="og:title" content="MOCAR" />
        <meta
          property="og:image"
          content={`https://storage.googleapis.com/${props?.fetchBoard.images[0]}`}
        />
        <meta property="og:description" content={props?.fetchBoard.contents} />
      </Head>
      <BoardDetail />
    </>
  );
}

// export const getServerSideProps = async (context: any) => {
//   const result = await request(
//     "https://backend02.codebootcamp.co.kr/graphql05",
//     FETCH_BOARD,
//     {
//       boardId: context.query.boardId,
//     }
//   );

//   return { props: { fetchBoard: result.fetchBoard } };
// };
