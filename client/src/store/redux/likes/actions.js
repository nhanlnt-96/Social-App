import {
  LIKE_POST_FAIL,
  LIKE_POST_START,
  LIKE_POST_SUCCESS
} from './actionTypes';

export const likePostStart = (PostId, UserId) => {
  return {
    type: LIKE_POST_START,
    payload: {
      PostId,
      UserId
    }
  }
}

export const likePostSuccess = (allLikesPost) => {
  return {
    type: LIKE_POST_SUCCESS,
    payload: allLikesPost
  }
}

export const likePostFail = (error) => {
  return {
    type: LIKE_POST_FAIL,
    payload: error
  }
}