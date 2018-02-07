import { combineReducers } from 'redux';
import topNews from './topNews';

const appReducer = combineReducers({
    topNews,
})

export default appReducer;