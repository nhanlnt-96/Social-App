import { fork } from 'redux-saga/effects';
import { onCreatePost, onLoadPost } from "./hanlerSaga";

function* rootSaga() {
  yield fork(onLoadPost)
  yield fork(onCreatePost)
}

export default rootSaga;