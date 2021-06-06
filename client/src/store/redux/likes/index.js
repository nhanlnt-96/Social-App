import {
  LIKE_POST_FAIL,
  LIKE_POST_START,
  LIKE_POST_SUCCESS
} from './actionTypes';

const initialState = {
  loading: false,
  isLiked: [],
  error: null
}

const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_POST_START:
      return {
        ...state,
        loading: true
      }
    case LIKE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        isLiked: action.payload
      }
    case LIKE_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
};

export default likesReducer;