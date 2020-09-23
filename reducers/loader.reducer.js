const initialState = false;

export default (state = initialState, { type }) => {
  switch (type) {
    case "SHOW_LOADER":
      return true;

    case "HIDE_LOADER":
      return false;

    default:
      return state;
  }
};
