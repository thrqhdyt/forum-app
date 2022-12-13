import React from 'react';
import PropTypes from 'prop-types';

function ThreadCategoryItem({ category, onCategoryHandler }) {
  return (
    <button type="button" className="btn-category" onClick={() => { onCategoryHandler(category); }}>
      #
      {category}
    </button>
  );
}

ThreadCategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  onCategoryHandler: PropTypes.func.isRequired,
};

export default ThreadCategoryItem;
