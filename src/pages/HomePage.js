import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThreadAddAction from "../components/ThreadAddAction";
import ThreadCategoryList from "../components/ThreadCategoryList";
import ThreadsList from "../components/ThreadsList";
import { setCategoryActionCreator } from "../states/category/action";
import { asyncPopulateUsersAndThreads } from "../states/shared/action";
import { asyncToggleUpVoteThread } from "../states/thread/action";

function HomePage() {
  const {
    threads = [],
    users = [],
    category = "",
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  const filterAllCategory = (threads) => {
    const categories = new Set();

    threads.map((thread) => {
      categories.add(thread.category);
    });

    return [...categories];
  };

  function onCategoryHandler(newCategory) {
    dispatch(setCategoryActionCreator(newCategory));
  }

  const categoryList = filterAllCategory(threads);

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVote = (id) => {
    dispatch(asyncToggleUpVoteThread(id));
  };

  const filteredThreads = threads.filter(
    (thread) => thread.category === category || category === ""
  );

  const threadList = filteredThreads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <ThreadCategoryList
        categories={categoryList}
        onCategoryHandler={onCategoryHandler}
      />
      <ThreadsList threads={threadList} upVote={onUpVote} />
      <ThreadAddAction />
    </section>
  );
}

export default HomePage;
