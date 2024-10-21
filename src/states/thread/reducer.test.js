/* eslint-disable no-undef */
/**
 * test scenario for threadReducer
 *
 * -thread reducer function
 *  - should return the initial state when given uknown action
 *  - should return the threads when given by RECEIVE_THREADS action
 *  - should return the threads with the new thread when given by ADD_THREAD action
 *  - should return the threads with the toggle upvote thread when given by
 *    TOGGLE_UPVOTE_THREAD action
 */

import threadReducer from "./reducer";

describe("threadReducers function", () => {
  it("should return the initial state when given uknown action", () => {
    // arrange
    const initialState = [];
    const action = { type: "UKNOWN" };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it("should return the threads when given by RECEIVE_THREADS action", () => {
    // arrange
    const initialState = [];
    const action = {
      type: "RECEIVE_THREADS",
      payload: {
        threads: [
          {
            id: "thread-1",
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            ownerId: "users-1",
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it("should return the threads with the new thread when given by ADD_THREAD action", () => {
    // arrange
    const initialState = [
      {
        id: "thread-1",
        title: "Thread Pertama",
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = {
      type: "ADD_THREAD",
      payload: {
        thread: [
          {
            id: "thread-2",
            title: "Thread Kedua",
            body: "Ini adalah thread kedua",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            ownerId: "users-2",
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it("should return the threads with the toggle upvote thread when given by TOGGLE_UPVOTE_THREAD action", () => {
    // arrange
    const initialState = [
      {
        id: "thread-1",
        title: "Thread Pertama",
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = {
      type: "TOGGLE_UPVOTE_THREAD",
      payload: {
        threadId: "thread-1",
        userId: "users-1",
      },
    };

    // action : upVote
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);

    // action : unUpVote
    const nextState2 = threadReducer(nextState, action);

    // assert
    expect(nextState2).toEqual(initialState);
  });
});
