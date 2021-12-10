import { setNewsData, getSearchData } from '../actions';
import axios from 'axios';


export const newsDataRequest = () => async (dispatch) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=7245870c03c64e17a425423b96b6ace0');
    dispatch(setNewsData(response.data.articles));
  } catch (err) {
    console.log(err);
  }
}


export const searchDataRequest = (searchData) => async (dispatch) => {
  try {
    console.log(searchData)
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchData}&apiKey=7245870c03c64e17a425423b96b6ace0`);
    console.log(response)
    dispatch(getSearchData(response.data.articles));
  } catch (err) {
    console.log(err);
  }
}