import { combineReducers } from "redux";
import postReducer from "./redux/posts";

const rootReducer = combineReducers({
  allPostsData: postReducer
});

export default rootReducer;