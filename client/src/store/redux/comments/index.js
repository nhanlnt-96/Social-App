import { GET_COMMENT_BY_POST_ID, LOAD_COMMENT_FAIL, LOAD_COMMENT_START, LOAD_COMMENT_SUCCESS } from './actionTypes';

const initialState = {
  loading: false,
  allComments: [],
  commentByPostId: [],
  error: null
}

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMMENT_START:
      return {
        ...state,
        loading: true
      }
    case LOAD_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        allComments: action.payload
      }
    case LOAD_COMMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case GET_COMMENT_BY_POST_ID:
      const commentByPostId = state.allComments.filter(val => val.PostId === id);
      return {
        ...state,
        commentByPostId: commentByPostId
      }
    default:
      return state;
  }
}

export default commentReducer;