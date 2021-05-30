import {
  LOAD_POST_FAIL,
  LOAD_POST_START,
  LOAD_POST_SUCCESS
} from "./actionTypes";

const initialState = {
  loading: false,
  allPosts: [],
  error: null
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POST_START:
      return {
        ...state,
        loading: true
      }
    case LOAD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        allPosts: action.payload
      }
    case LOAD_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default postReducer;