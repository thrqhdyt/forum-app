import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, onChangeTitle] = useInput('');
  const [category, onChangeCategory] = useInput('');
  const [body, setBody] = useState('');

  const onChangeBody = (event) => {
    setBody(event.target.innerText);
  };

  return (
    <form className="thread-input-form">
      <input type="text" value={title} onChange={onChangeTitle} placeholder="Title" className="thread-input__title" />
      <input type="text" value={category} onChange={onChangeCategory} placeholder="Category (opsional)" className="thread-input__category" />
      <div className="thread-input__body" data-testid="input-body" contentEditable onInput={onChangeBody} />
      <button type="submit" onClick={() => addThread({ title, body, category })}>Add Thread</button>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
