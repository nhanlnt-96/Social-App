import {
  CREATE_POST_REQUEST, LOAD_POST_BY_ID_FAIL,
  LOAD_POST_BY_ID_START, LOAD_POST_BY_ID_SUCCESS,
  LOAD_POST_FAIL,
  LOAD_POST_START,
  LOAD_POST_SUCCESS
} from './actionTypes';

export const loadPostStart = () => {
  return {
    type: LOAD_POST_START
  }
}

export const loadPostSuccess = (allPosts) => {
  return {
    type: LOAD_POST_SUCCESS,
    payload: allPosts
  }
}

export const loadPostFail = (error) => {
  return {
    type: LOAD_POST_FAIL,
    payload: error
  }
}

export const loadPostByIdStart = (postById) => {
  return {
    type: LOAD_POST_BY_ID_START,
    payload: postById
  }
}

export const loadPostByIdSuccess = (postsByIdData) => {
  return {
    type: LOAD_POST_BY_ID_SUCCESS,
    payload: postsByIdData
  }
}

export const loadPostByIdFail = (error) => {
  return {
    type: LOAD_POST_BY_ID_FAIL,
    payload: error
  }
}

export const createPostRequest = (postContent) => {
  return {
    type: CREATE_POST_REQUEST,
    payload: postContent
  }
}