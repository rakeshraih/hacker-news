const initState = {
  theme: "light",
  list: [],
  filter: true,
};

const Reducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: action.theme,
      };
    case "UPDATE_LIST":
      return {
        ...state,
        list: action.list,
      };
    case "CHANGE_FILTER":
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};

export default Reducer;
