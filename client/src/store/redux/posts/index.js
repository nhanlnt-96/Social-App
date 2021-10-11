import {
  LOAD_POST_BY_ID_FAIL,
  LOAD_POST_BY_ID_START,
  LOAD_POST_BY_ID_SUCCESS,
  LOAD_POST_BY_USER_FAIL,
  LOAD_POST_BY_USER_START,
  LOAD_POST_BY_USER_SUCCESS,
  LOAD_POST_FAIL,
  LOAD_POST_START,
  LOAD_POST_SUCCESS
} from './actionTypes';

const initialState = {
  loading: false,
  allPosts: [],
  postById: [],
  postByUser: [],
  deletePostResponse: '',
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
    case LOAD_POST_BY_ID_START:
      return {
        ...state,
        loading: true
      }
    case LOAD_POST_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        postById: action.payload
      }
    case LOAD_POST_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case LOAD_POST_BY_USER_START:
      return {
        ...state,
        loading: true
      }
    case LOAD_POST_BY_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        postByUser: action.payload
      }
    case LOAD_POST_BY_USER_FAIL:
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
