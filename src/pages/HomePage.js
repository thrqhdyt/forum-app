import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadAddAction from '../components/ThreadAddAction';
import ThreadsList from '../components/ThreadsList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncToggleDownVoteThread, asyncToggleUpVoteThread } from '../states/thread/action';

function HomePage() {
  const { threads = [], users = [], authUser } = useSelector((states) => states);
  const [status, setStatus] = useState("none");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVote = (id) => {
    if (status === 'none') {
      dispatch(asyncToggleUpVoteThread(id));
      setStatus('upVote');
      return;
    }

    if (status === 'upVote') {
      dispatch(asyncToggleUpVoteThread(id));
      setStatus('none');
      return;
    }

    if (status === 'downVote') {
      dispatch(asyncToggleUpVoteThread(id));
      dispatch(asyncToggleDownVoteThread(id));
      setStatus('upVote');
    }
  };

  const onDownVote = (id) => {
    if (status === 'none') {
      dispatch(asyncToggleDownVoteThread(id));
      setStatus('downVote');
      return;
    }

    if (status === 'downVote') {
      dispatch(asyncToggleDownVoteThread(id));
      setStatus('none');
      return;
    }

    if (status === 'upVote') {
      dispatch(asyncToggleDownVoteThread(id));
      dispatch(asyncToggleUpVoteThread(id));
      setStatus('downVote');
    }
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <ThreadsList threads={threadList} upVote={onUpVote} downVote={onDownVote} />
      <ThreadAddAction />
    </section>
  );
}

export default HomePage;
