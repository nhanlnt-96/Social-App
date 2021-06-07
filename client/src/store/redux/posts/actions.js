import {
  CREATE_POST_REQUEST,
  DELETE_POST_REQUEST,
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

//load all post
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

//load post by id
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

//load by user
export const loadPostByUserStart = (postByUser) => {
  return {
    type: LOAD_POST_BY_USER_START,
    payload: postByUser
  }
}

export const loadPostByUserSuccess = (postsByUserData) => {
  return {
    type: LOAD_POST_BY_USER_SUCCESS,
    payload: postsByUserData
  }
}

export const loadPostByUserFail = (error) => {
  return {
    type: LOAD_POST_BY_USER_FAIL,
    payload: error
  }
}

export const createPostRequest = (postContent) => {
  return {
    type: CREATE_POST_REQUEST,
    payload: postContent
  }
}

export const deletePostRequest = (postId) => {
  return {
    type: DELETE_POST_REQUEST,
    payload: postId
  }
}