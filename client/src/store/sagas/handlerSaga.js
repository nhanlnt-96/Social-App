import { takeEvery } from 'redux-saga/effects';
import {
  CREATE_POST_REQUEST,
  DELETE_POST_REQUEST,
  LOAD_POST_BY_ID_START, LOAD_POST_BY_USER_START,
  LOAD_POST_START
} from '../redux/posts/actionTypes';
import {
  onCreateCommentRequest,
  onCreatePostRequest, onDeleteComment, onDeletePostStart, onLikePost,
  onLoadCommentStartAsync, onLoadPostByIdStartAsync, onLoadPostByUserStartAsync,
  onLoadPostStartAsync
} from './requestSaga';
import { CREATE_COMMENT_REQUEST, DELETE_COMMENT, LOAD_COMMENT_START } from '../redux/comments/actionTypes';
import { LIKE_POST_START } from '../redux/likes/actionTypes';

export function* onPost() {
  yield takeEvery(CREATE_POST_REQUEST, onCreatePostRequest);
  yield takeEvery(LOAD_POST_START, onLoadPostStartAsync);
  yield takeEvery(LOAD_POST_BY_ID_START, onLoadPostByIdStartAsync);
  yield takeEvery(LOAD_POST_BY_USER_START, onLoadPostByUserStartAsync);
  yield takeEvery(DELETE_POST_REQUEST, onDeletePostStart)
}

export function* onComment() {
  yield takeEvery(CREATE_COMMENT_REQUEST, onCreateCommentRequest);
  yield takeEvery(LOAD_COMMENT_START, onLoadCommentStartAsync);
  yield takeEvery(DELETE_COMMENT, onDeleteComment);
}

export function* onLike() {
  yield takeEvery(LIKE_POST_START, onLikePost);
}

