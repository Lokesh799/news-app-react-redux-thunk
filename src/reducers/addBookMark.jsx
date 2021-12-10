import { ADD_BOOKMARK } from "../actions";

const initialState = {
  bookMarkRecords: [],
}

const getLocalStorage = (bookMarkRecords = []) => {
  const data = JSON.stringify(bookMarkRecords);
  localStorage.setItem('BookMarkItem', data)
}

const setBookMarkData = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      const bookMarkRecords = [...state.bookMarkRecords, action.payload]
      getLocalStorage(bookMarkRecords)
      return {
        ...state,
        bookMarkRecords: [action.payload, ...state.bookMarkRecords]
      };
    default:
      return state;
  }
}

export default setBookMarkData;