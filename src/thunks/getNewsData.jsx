import { setNewsData } from '../actions';
import axios from 'axios';


export const newsDataRequest = () => async (dispatch) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=7245870c03c64e17a425423b96b6ace0');
    dispatch(setNewsData(response.data.articles));
  } catch (err) {
    console.log(err);
  }
}