import React from 'react';
import PropTypes from 'prop-types';

function ThreadCategoryItem({ onCategory, category }) {
  return (
    <button type="button" onClick={onCategory}>
      <p>
        #
        {category}
      </p>
    </button>
  );
}

ThreadCategoryItem.propTypes = {
  onCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default ThreadCategoryItem;
