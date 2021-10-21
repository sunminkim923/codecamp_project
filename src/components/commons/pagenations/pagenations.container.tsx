import { useState } from "react";
import PagenationsPageUI from "./pagenations.presenter";

export default function Pagenation(props: any) {
  const [startPage, setStartPage] = useState(1);
  const latsPage = Math.ceil(
    Number(props.boardCountData?.fetchBoardsCount) / 10
  );
  function onClickPage(event: MouseEvent) {
    props.refetch({ page: Number((event.target as any).id) });
  }

  function onClickPrevPage() {
    if (startPage <= 1) {
      return;
    }
    setStartPage((prev) => prev - 10);
  }
  function onClickNextPage() {
    if (startPage + 10 > latsPage) {
      return;
    }
    setStartPage(startPage + 9);
  }

  return (
    <>
      <PagenationsPageUI
        onClickPage={onClickPage}
        onClickPrevPage={onClickPrevPage}
        onClickNextPage={onClickNextPage}
        startPage={startPage}
      />
    </>
  );
}
