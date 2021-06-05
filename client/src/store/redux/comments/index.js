import { LOAD_COMMENT_FAIL, LOAD_COMMENT_START, LOAD_COMMENT_SUCCESS } from './actionTypes';

const initialState = {
  loading: false,
  allComments: [],
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
    default:
      return state;
  }
}

export default commentReducer;