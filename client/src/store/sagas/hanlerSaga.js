import { takeEvery } from 'redux-saga/effects';
import { CREATE_POST_REQUEST, LOAD_POST_START } from '../redux/posts/actionTypes';
import {
  onCreateCommentRequest,
  onCreatePostRequest,
  onLoadCommentStartAsync,
  onLoadPostStartAsync
} from './requestSaga';
import { CREATE_COMMENT_REQUEST, LOAD_COMMENT_START } from '../redux/comments/actionTypes';

export function* onCreatePost() {
  yield takeEvery(CREATE_POST_REQUEST, onCreatePostRequest);
}

export function* onCreateComment() {
  yield takeEvery(CREATE_COMMENT_REQUEST, onCreateCommentRequest);
}

export function* onLoadPost() {
  yield takeEvery(LOAD_POST_START, onLoadPostStartAsync);
}

export function* onLoadComment() {
  yield takeEvery(LOAD_COMMENT_START, onLoadCommentStartAsync);
}

