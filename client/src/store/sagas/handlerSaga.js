import { takeEvery } from 'redux-saga/effects';
import { CREATE_POST_REQUEST, LOAD_POST_START } from '../redux/posts/actionTypes';
import {
  onCreateCommentRequest,
  onCreatePostRequest, onDeleteComment,
  onLoadCommentStartAsync,
  onLoadPostStartAsync
} from './requestSaga';
import { CREATE_COMMENT_REQUEST, DELETE_COMMENT, LOAD_COMMENT_START } from '../redux/comments/actionTypes';

export function* onPost() {
  yield takeEvery(CREATE_POST_REQUEST, onCreatePostRequest);
  yield takeEvery(LOAD_POST_START, onLoadPostStartAsync);
}

export function* onComment() {
  yield takeEvery(CREATE_COMMENT_REQUEST, onCreateCommentRequest);
  yield takeEvery(LOAD_COMMENT_START, onLoadCommentStartAsync);
  yield takeEvery(DELETE_COMMENT, onDeleteComment);
}

