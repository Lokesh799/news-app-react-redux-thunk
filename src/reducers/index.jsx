import { combineReducers } from 'redux';
import setNewsData from "./newsData";
import searchNewsData from './searchData'
import setBookMarkData from './addBookMark';


const reducer = combineReducers({
  setNewsData,
  searchNewsData,
  setBookMarkData,
});
export default reducer;