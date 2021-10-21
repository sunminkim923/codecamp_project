//@ts-nocheck
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../../src/components/units/board/write/boardWrite.container";
import { FETCH_BOARD } from "../../../../../src/components/units/board/detail/boardDetail.queries";

export default function EditPage() {
  const isEdit = true;
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.Id },
  });

  return <BoardWrite isEdit={isEdit} data={data} />;
}
