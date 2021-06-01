import { takeEvery } from 'redux-saga/effects';
import { CREATE_POST_REQUEST, LOAD_POST_START } from '../redux/posts/actionTypes';
import {
  onCreateCommentRequest,
  onCreatePostRequest,
  onLoadCommentStartAsync,
  onLoadPostStartAsync, onLoginStart, onRegisterStart
} from './requestSaga';
import { CREATE_COMMENT_REQUEST, LOAD_COMMENT_START } from '../redux/comments/actionTypes';
import { LOGIN_USER, REGISTER_USER } from '../redux/auth/actionTypes';

export function* onPost() {
  yield takeEvery(CREATE_POST_REQUEST, onCreatePostRequest);
  yield takeEvery(LOAD_POST_START, onLoadPostStartAsync);
}

export function* onComment() {
  yield takeEvery(CREATE_COMMENT_REQUEST, onCreateCommentRequest);
  yield takeEvery(LOAD_COMMENT_START, onLoadCommentStartAsync);
}

export function* onAuth() {
  yield takeEvery(REGISTER_USER, onRegisterStart);
  yield takeEvery(LOGIN_USER, onLoginStart);
}

