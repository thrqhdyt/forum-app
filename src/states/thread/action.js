import api from "../../utils/api";
import { asyncPopulateUsersAndThreads } from "../shared/action";

const ActionType = {
  RECEIVE_THREADS: "RECEIVE_THREADS",
  ADD_THREAD: "ADD_THREAD",
  TOGGLE_UPVOTE_THREAD: "TOGGLE_UPVOTE_THREAD",
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function toggleUpVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ title, body, category = "" }) {
  return async (dispatch) => {
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser, threads } = getState();
    const thread = threads.find((t) => t.id === threadId);
    const hasUpvoted = thread.upVotesBy.includes(authUser.id);

    dispatch(
      toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id })
    );

    try {
      if (hasUpvoted) {
        await api.downVoteThread(threadId);
      } else {
        await api.upVoteThread(threadId);
      }
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id })
      );
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  asyncAddThread,
  asyncToggleUpVoteThread,
};
