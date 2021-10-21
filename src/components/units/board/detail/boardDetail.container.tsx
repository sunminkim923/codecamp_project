// @ts-nocheck

import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  DELETE_BOARD,
  DISLIKE_BOARD,
  FETCH_BOARD,
  FETCH_BOARDS_COUNT,
  LIKE_BOARD,
} from "./boardDetail.queries";
import BoardDetailUI from "./boardDetail.presenter";
import { Modal } from "antd";
import { useState } from "react";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const [isModal, setIsModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onClickList = () => {
    router.push("/board/list/");
  };

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.Id },
  });

  

  const onClickEdit = () => {
    router.push(`/board/detail/${router.query.Id}/edit`);
  };

  const onClickDelete = () => {
    setIsModal(true);
    setIsOpen(true);
  };

  const onClickOk = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: router.query.Id,
        },
      });
      Modal.info({ content: "게시글이 삭제되었습니다." });
      router.push("/board/list");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickCancel = () => {
    setIsOpen(false);
  };

  const onClickLike = () => {
    likeBoard({
      variables: {
        boardId: router.query.Id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.Id },
        },
      ],
    });
  };

  const onClickDislike = () => {
    dislikeBoard({
      variables: {
        boardId: router.query.Id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.Id },
        },
      ],
    });
  };

  return (
    <BoardDetailUI
      onClickList={onClickList}
      data={data}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      onClickCancel={onClickCancel}
      onClickOk={onClickOk}
      isModal={isModal}
      isOpen={isOpen}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
