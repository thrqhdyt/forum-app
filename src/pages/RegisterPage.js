import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';
import heroBackground from '../assets/hero.png';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/');
  };

  return (
    <section className="register-page">
      <header className="register-page__hero">
        <img src={heroBackground} alt="hero" />
      </header>
      <article className="register-page__main">
        <h2>Register</h2>
        <p className="login-page__quote">Place to share knowledge and better understand the world</p>
        <RegisterInput register={onRegister} />
        <p>
          Already have an account?
          <Link to="/login" style={{ color: 'yellow', textDecoration: 'none' }}> Login</Link>
        </p>
      </article>
    </section>
  );
}

export default RegisterPage;
