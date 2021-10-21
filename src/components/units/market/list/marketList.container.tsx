import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import MarketListUI from "./marketList.presenter";
import {
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_OF_THE_BEST,
} from "./marketList.queries";
import _ from "lodash";

export default function MarketList() {
  const router = useRouter();

  const [soldItem, setSoldItem] = useState(false);
  const [keyword, setKeyword] = useState("");

  const [baskets, setBaskets] = useState();
  const [viewedItem, setViewedItem] = useState(true);

  const { data, fetchMore, refetch } = useQuery(FETCH_USEDITEMS, {
    variables: {
      isSoldout: soldItem,
    },
  });

  const { data: newData } = useQuery(FETCH_USEDITEMS_OF_THE_BEST);

  const [hasMore, setHasMore] = useState(true);

  const onClickSelling = () => {
    setSoldItem(false);
  };

  const onClickSold = () => {
    setSoldItem(true);
  };

  const onClickSubmit = () => {
    router.push("./write/");
  };

  const onClickBestProduct = (data: any) => {
    router.push(`./detail/${data._id}`);
  };

  useEffect(() => {
    const items = JSON.parse(sessionStorage.getItem("todaylist") || "[]");
    setBaskets(items);
  }, []);

  const onClickProduct = (data: any) => {
    setViewedItem(false);

    // ===========
    const newBaskets = [data];
    const baskets = JSON.parse(
      sessionStorage.getItem("todaylist") || "[]"
    ).filter((el: any, i: any) => i < 4 && el._id !== data._id);
    sessionStorage.setItem(
      "todaylist",
      JSON.stringify(newBaskets.concat(baskets))
    );
    // ===========
    router.push(`./detail/${data._id}`);

    // setViewedItem(false);
    // const newBaskets = [data];
    // const baskets = JSON.parse(
    //   sessionStorage.getItem("todayViewedList") || "[]"
    // ).filter((el: any, i: any) => i < 4 && el?._id !== data);
    // sessionStorage.setItem(
    //   "todayViewedList",
    //   JSON.stringify(newBaskets.concat(baskets))
    // );
  };

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.floor(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        //@ts-ignore
        if (!fetchMoreResult.fetchUseditems.length) setHasMore(false);
        return {
          fetchUseditems: [
            //@ts-ignore
            ...prev.fetchUseditems,
            //@ts-ignore
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const getDebounce = _.debounce((data) => {
    //@ts-ignore
    refetch({ search: data });
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
    setKeyword(event.target.value);
  };

  return (
    <MarketListUI
      data={data}
      newData={newData}
      onClickSubmit={onClickSubmit}
      onClickBestProduct={onClickBestProduct}
      onClickProduct={onClickProduct}
      onLoadMore={onLoadMore}
      hasMore={hasMore}
      onClickSelling={onClickSelling}
      onClickSold={onClickSold}
      soldItem={soldItem}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
      baskets={baskets}
      viewedItem={viewedItem}
    />
  );
}
