import React from 'react';
import PropTypes from 'prop-types';
import ThreadCategoryItem from './ThreadCategoryItem';

function ThreadCategoryList({ categories, onCategoryHandler }) {
  return (
    <div className="category-list">
      <h2>Popular Category</h2>
      {
        categories.map((category) => (
          <ThreadCategoryItem
            key={category}
            category={category}
            onCategoryHandler={onCategoryHandler}
          />
        ))
      }
    </div>
  );
}

ThreadCategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategoryHandler: PropTypes.func.isRequired,
};

export default ThreadCategoryList;
