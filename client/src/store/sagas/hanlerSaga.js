import { takeEvery } from 'redux-saga/effects';
import { CREATE_POST_REQUEST, LOAD_POST_START } from "../redux/posts/actionTypes";
import { onCreatePostRequest, onLoadPostStartAsync } from "./requestSaga";

export function* onCreatePost() {
  yield takeEvery(CREATE_POST_REQUEST, onCreatePostRequest);
}

export function* onLoadPost() {
  yield takeEvery(LOAD_POST_START, onLoadPostStartAsync);
}

