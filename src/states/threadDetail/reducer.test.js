/* eslint-disable no-undef */
/**
 * test scenarion for threadDetail
 *
 * -threaddetailReducer function
 *  - should return the initial state when given uknown action
 *  - should return the threadDetail when given by RECEIVE_THREAD_DETAIL action
 *  - should return the null when given by CLEAR_THREAD_DETAIL action
 *  - should return the threadDetail with the toggle upvote thread when given by
 *    TOGGLE_UPVOTE_THREAD_DETAIL action
 *  - should return the threadDetail with the toggle downvote thread when given by
 *    TOGGLE_DOWNVOTE_THREAD_DETAIL action
 *
 */

import threadDetailReducer from "./reducer";

describe('threadDetailReducer function', () => {
  it('should return the initial state when given uknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UKNOWN' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threadDetail when given by RECEIVE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: [
          {
            id: "thread-1",
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            owner: {
              id: "users-1",
              name: "John Doe",
              avatar: "https://generated-image-url.jpg",
            },
            upVotesBy: [],
            downVotesBy: [],
            comments: [
              {
                id: "comment-1",
                content: "Ini adalah komentar pertama",
                createdAt: "2021-06-21T07:00:00.000Z",
                owner: {
                  id: "users-1",
                  name: "John Doe",
                  avatar: "https://generated-image-url.jpg",
                },
                upVotesBy: [],
                downVotesBy: [],
              },
            ],
          },
        ],
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return the null when given by CLEAR_THREAD_DETAIL action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'CLEAR_THREAD_DETAIL',
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toBeNull();
  });

  it('should return the threadDetail with the toggle upvote thread when given by TOGGLE_UPVOTE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      owner: {
        id: "users-1",
        name: "John Doe",
        avatar: "https://generated-image-url.jpg",
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: "comment-1",
          content: "Ini adalah komentar pertama",
          createdAt: "2021-06-21T07:00:00.000Z",
          owner: {
            id: "users-1",
            name: "John Doe",
            avatar: "https://generated-image-url.jpg",
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: 'TOGGLE_UPVOTE_THREAD_DETAIL',
      payload: {
        userId: 'users-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState.upVotesBy).toEqual([action.payload.userId]);
  });

  it('should return the threadDetail with the toggle downvote thread when given by TOGGLE_DOWNVOTE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      owner: {
        id: "users-1",
        name: "John Doe",
        avatar: "https://generated-image-url.jpg",
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: "comment-1",
          content: "Ini adalah komentar pertama",
          createdAt: "2021-06-21T07:00:00.000Z",
          owner: {
            id: "users-1",
            name: "John Doe",
            avatar: "https://generated-image-url.jpg",
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: 'TOGGLE_DOWNVOTE_THREAD_DETAIL',
      payload: {
        userId: 'users-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState.downVotesBy).toEqual([action.payload.userId]);
  });
});
