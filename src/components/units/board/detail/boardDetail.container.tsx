import { OperationVariables, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  DELETE_BOARD,
  DISLIKE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
} from "./boardDetail.queries";
import BoardDetailUI from "./boardDetail.presenter";
import { Modal } from "antd";
import { useState } from "react";

export interface IQueryData {
  data?: string;
  fetchBoard: any;
  writer: string | any;
  images: string[];
}

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation<any, OperationVariables>(DELETE_BOARD);
  const [likeBoard] = useMutation<any, OperationVariables>(LIKE_BOARD);
  const [dislikeBoard] = useMutation<any, OperationVariables>(DISLIKE_BOARD);

  const [isModal, setIsModal] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickList = () => {
    router.push("/board/list/");
  };

  const { data } = useQuery<IQueryData>(FETCH_BOARD, {
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
    } catch (error: unknown | any) {
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
