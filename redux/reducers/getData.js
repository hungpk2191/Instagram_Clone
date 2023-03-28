const initialState = {
  Data: [],
};
const getDataNF = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA_NEW_FEED":
      return { ...state, Data: action.payload };
    default:
      return state;
  }
};
export default getDataNF;
