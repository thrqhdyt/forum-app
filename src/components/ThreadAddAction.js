import React from 'react';
import { Link } from 'react-router-dom';

function ThreadAddAction() {
  return (
    <div className="thread__add">
      <Link to="/add">
        <button type="button" className="thread__add-button">+</button>
      </Link>
    </div>
  );
}

export default ThreadAddAction;
