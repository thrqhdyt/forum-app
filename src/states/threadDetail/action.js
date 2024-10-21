import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const ActionType = {
  RECEIVE_THREAD_DETAIL: "RECEIVE_THREAD_DETAIL",
  CLEAR_THREAD_DETAIL: "CLEAR_THREAD_DETAIL",
  TOGGLE_UPVOTE_THREAD_DETAIL: "TOGGLE_UPVOTE_THREAD_DETAIL",
  CREATE_COMMENT_THREAD: "CREATE_COMMENT_THREAD",
  TOGGLE_UPVOTE_COMMENT: "TOGGLE_UPVOTE_COMMENT",
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleUpVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function createCommentThreadActionCreator(content) {
  return {
    type: ActionType.CREATE_COMMENT_THREAD,
    payload: {
      content,
    },
  };
}

function toggleUpVoteCommentActionCreator({ threadId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId,
    },
  };
}

function asyncCreateCommentThread({ threadId, content }) {
  return async (dispatch) => {
    try {
      const comment = await api.createComment({ threadId, content });
      dispatch(createCommentThreadActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const threadDetail = await api.getThreadsDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToggleUpVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    const hasUpvoted = threadDetail.upVotesBy.includes(authUser.id);

    dispatch(toggleUpVoteThreadDetailActionCreator(authUser.id));

    try {
      if (hasUpvoted) {
        await api.downVoteThread(threadDetail.id);
      } else {
        await api.upVoteThread(threadDetail.id);
      }
    } catch (error) {
      alert(error.message);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    }
  };
}

function asyncToggleUpVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      toggleUpVoteCommentActionCreator({
        threadId,
        commentId,
        userId: authUser.id,
      })
    );

    try {
      await api.upVoteComment({ threadId, commentId });
    } catch (error) {
      dispatch(
        toggleUpVoteCommentActionCreator({
          threadId,
          commentId,
          userId: authUser.id,
        })
      );
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleUpVoteThreadDetailActionCreator,
  toggleUpVoteCommentActionCreator,
  createCommentThreadActionCreator,
  asyncReceiveThreadDetail,
  asyncToggleUpVoteThreadDetail,
  asyncCreateCommentThread,
  asyncToggleUpVoteComment,
};
