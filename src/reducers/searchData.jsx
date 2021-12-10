import { SET_SEARCH_DATA, GET_SEARCH_DATA } from "../actions";

const initialState = {
  search: '',
  searchingRecords: [],
}

const searchNewsData = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_DATA:
      return {
        ...state,
        search: action.payload,
      };
    case GET_SEARCH_DATA:
      return {
        ...state,
        searchingRecords: action.payload,
      };
    default:
      return state;
  }
}

export default searchNewsData;