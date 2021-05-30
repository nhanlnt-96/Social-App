import {
  CREATE_COMMENT_REQUEST,
  GET_COMMENT_BY_POST_ID,
  LOAD_COMMENT_FAIL,
  LOAD_COMMENT_START,
  LOAD_COMMENT_SUCCESS
} from './actionTypes';

export const loadCommentStart = (id) => {
  return {
    type: LOAD_COMMENT_START,
    payload: id
  }
}

export const loadCommentSuccess = (allComments) => {
  return {
    type: LOAD_COMMENT_SUCCESS,
    payload: allComments
  }
}

export const loadCommentFail = (error) => {
  return {
    type: LOAD_COMMENT_FAIL,
    payload: error
  }
}

export const getCommentByPostId = (id) => {
  return {
    type: GET_COMMENT_BY_POST_ID,
    payload: id
  }
}

export const createCommentRequest = (id, commentBody) => {
  return {
    type: CREATE_COMMENT_REQUEST,
    payload: {
      id,
      commentBody
    }
  }
}