import { takeEvery } from 'redux-saga/effects';
import { LOAD_POST_START } from "../redux/posts/actionTypes";
import { onLoadPostStartAsync } from "./requestSaga";

export function* onLoadPost() {
  yield takeEvery(LOAD_POST_START, onLoadPostStartAsync);
}