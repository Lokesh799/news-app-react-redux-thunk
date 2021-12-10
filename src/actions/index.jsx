export const SET_NEWS_DATA = 'SET_NEWS_DATA';
export const SET_SEARCH_DATA = 'SET_SEARCH_DATA';
export const GET_SEARCH_DATA = 'GET_SEARCH_DATA';
export const ADD_BOOKMARK='ADD_BOOKMARK';

export const setNewsData = (payload) => ({ type: SET_NEWS_DATA, payload });
export const setSearchData = (payload) => ({ type: SET_SEARCH_DATA, payload });
export const getSearchData = (payload) => ({ type: GET_SEARCH_DATA, payload });
export const addBookMark = (payload) => ({ type: ADD_BOOKMARK, payload });
