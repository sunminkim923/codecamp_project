// @ts-nocheck

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import BoardListUI from "./boardList.presenter";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THE_BEST,
} from "./boardList.queries";
import _ from "lodash";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: bestData } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const { data: boardCountData, refetch: searchRefetch } =
    useQuery(FETCH_BOARDS_COUNT);

  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");

  const onClickBestBoard = (data) => {
    router.push(`/board/detail/${data}`);
  };

  const onClickBoard = (data) => {
    router.push(`/board/detail/${data}`);
  };

  const onClickSubmit = () => {
    router.push("/board/write/");
  };

  const getDebounce = _.debounce((data) => {
    refetch({ search: data });
    setSearch(data);
    searchRefetch({ search: data });
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
    setKeyword(event.target.value);
  };

  return (
    <BoardListUI
      data={data}
      bestData={bestData}
      onClickBestBoard={onClickBestBoard}
      onClickBoard={onClickBoard}
      onClickSubmit={onClickSubmit}
      refetch={refetch}
      boardCountData={boardCountData}
      search={search}
      keyword={keyword}
      onChangeSearch={onChangeSearch}
    />
  );
}
