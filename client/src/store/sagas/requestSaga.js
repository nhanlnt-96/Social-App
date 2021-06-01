import { call, put } from 'redux-saga/effects';
import { createPost, getAllPosts } from '../../network/services/post';
import { loadPostFail, loadPostSuccess } from '../redux/posts/actions';
import { createComment, getCommentById } from '../../network/services/comment';
import { loadCommentFail, loadCommentSuccess } from '../redux/comments/actions';
import { loginRequest, registerRequest } from '../../network/services/auth';
import { loginFail, loginSuccess, registerFail, registerSuccess } from '../redux/auth/actions';

//post
export function* onCreatePostRequest(action) {
  try {
    yield call(createPost, action.payload)
    const response = yield call(getAllPosts);
    yield put(loadPostSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* onLoadPostStartAsync() {
  try {
    const response = yield call(getAllPosts);
    yield put(loadPostSuccess(response.data));
  } catch (error) {
    yield put(loadPostFail(error));
  }
}


//comment
export function* onCreateCommentRequest(action) {
  try {
    yield call(createComment, action.payload.id, action.payload.commentBody)
    const response = yield call(getCommentById, action.payload.id);
    yield put(loadCommentSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* onLoadCommentStartAsync(action) {
  try {
    const response = yield call(getCommentById, action.payload);
    yield put(loadCommentSuccess(response.data));
  } catch (error) {
    yield put(loadCommentFail(error));
  }
}

//auth
export function* onRegisterStart(action) {
  try {
    const response = yield call(registerRequest, action.payload);
    yield put(registerSuccess(response));
  } catch (error) {
    yield put(registerFail(error));
  }
}

export function* onLoginStart(action) {
  try {
    const response = yield call(loginRequest, action.payload);
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(loginFail(error));
  }
}

