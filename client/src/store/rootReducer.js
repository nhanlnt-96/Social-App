import { combineReducers } from 'redux';
import postReducer from './redux/posts';
import commentReducer from './redux/comments';
import authReducer from './redux/auth';
import likesReducer from './redux/likes';

const rootReducer = combineReducers({
  allPostsData: postReducer,
  allCommentsData: commentReducer,
  isAuth: authReducer,
  allLikesData: likesReducer
});

export default rootReducer;