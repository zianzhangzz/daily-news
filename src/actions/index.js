import axios from 'axios';
import { FETCH_TOP_NEWS } from './types';

const apiKey = '2603c47d6d1349418888897b5ea3abac';
const baseURL = 'https://newsapi.org';
const topHeadlines = '/v2/top-headlines?sources=';
var api = axios.create({
    timeout: 1000,
    headers: {'X-Api-Key': apiKey},

  });

export const fetchTopNews =  (newsBrand) => async dispatch => {
    const url = baseURL + topHeadlines + newsBrand;
    const res = await api.get(url);
    const topNews = res.data.articles;
    dispatch({ type: FETCH_TOP_NEWS, payload: topNews });
}

