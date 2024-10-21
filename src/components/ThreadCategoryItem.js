import React from "react";
import PropTypes from "prop-types";
import BtnCategory from "../styled/ButtonCategory";

function ThreadCategoryItem({ category, onCategoryHandler }) {
  return (
    <BtnCategory
      type="button"
      className="btn-category"
      onClick={() => {
        onCategoryHandler(category);
      }}
    >
      #{category}
    </BtnCategory>
  );
}

ThreadCategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  onCategoryHandler: PropTypes.func.isRequired,
};

export default ThreadCategoryItem;
