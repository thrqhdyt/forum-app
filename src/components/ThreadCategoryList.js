import React from 'react';
import PropTypes from 'prop-types';
import ThreadCategoryItem from './ThreadCategoryItem';

function ThreadCategoryList({ categories, onCategory }) {
  return (
    <div className="category-list">
      <h2>Popular Category</h2>
      {
        categories.map((category) => (
          <ThreadCategoryItem key={category.id} {...category} onCategory={onCategory} />
        ))
      }
    </div>
  );
}

ThreadCategoryList.propTypes = {
  categories: PropTypes.string.isRequired,
  onCategory: PropTypes.func.isRequired,
};

export default ThreadCategoryList;
