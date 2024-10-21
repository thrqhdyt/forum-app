import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ListComment from "../components/ListComment";
import ThreadComment from "../components/ThreadComment";
import ThreadDetail from "../components/ThreadDetail";
import {
  asyncCreateCommentThread,
  asyncReceiveThreadDetail,
  asyncToggleUpVoteComment,
  asyncToggleUpVoteThreadDetail,
} from "../states/threadDetail/action";

function DetailPage() {
  const { id } = useParams();
  const {
    threadDetail = null,
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onUpVotes = () => {
    dispatch(asyncToggleUpVoteThreadDetail());
  };

  const onAddComment = (content) => {
    dispatch(asyncCreateCommentThread({ threadId: id, content }));
  };

  const onUpVoteComment = (commentId) => {
    dispatch(asyncToggleUpVoteComment({ threadId: id, commentId }));
  };

  if (!threadDetail) {
    return null;
  }

  const allComment = threadDetail.comments.map((comment) => ({
    ...comment,
    user: users.find((user) => user.id === comment.id),
    authUser: authUser.id,
  }));

  return (
    <section className="detail-page">
      <ThreadDetail
        {...threadDetail}
        authUser={authUser.id}
        upVoteThread={onUpVotes}
      />
      <ThreadComment addComment={onAddComment} />
      <ListComment comments={allComment} upVote={onUpVoteComment} />
    </section>
  );
}

export default DetailPage;
