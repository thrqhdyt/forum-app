import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';
import heroBackground from '../assets/hero.png';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="login-page">
      <header className="login-page__hero">
        <img src={heroBackground} alt="hero" />
      </header>
      <article className="login-page__main">
        <h2>Login</h2>
        <p className="login-page__quote">Place to share knowledge and better understand the world.</p>
        <LoginInput login={onLogin} />
        <p className="login-page__text">
          Don&apos;t have an account?
          <Link to="/register" style={{ color: 'yellow', textDecoration: 'none' }}> Register</Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
