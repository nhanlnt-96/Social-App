import { combineReducers } from 'redux';
import postReducer from './redux/posts';
import commentReducer from './redux/comments';

const rootReducer = combineReducers({
  allPostsData: postReducer,
  allCommentsData: commentReducer
});

export default rootReducer;