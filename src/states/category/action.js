const ActionType = {
  CATEGORY_ITEM: "CATEGORY_ITEM",
};

function setCategoryActionCreator(category) {
  return {
    type: ActionType.CATEGORY_ITEM,
    payload: { category },
  };
}

export { ActionType, setCategoryActionCreator };
