import { SET_NEWS_DATA } from "../actions";

const initialState = {
 newsRecords: [],
}

const setNewsData = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS_DATA:
      return {
        ...state,
        newsRecords: action.payload,
      };
    default:
      return state;
  }
}

export default setNewsData;