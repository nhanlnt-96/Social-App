import { fork } from 'redux-saga/effects';
import { onCreateComment, onCreatePost, onLoadComment, onLoadPost } from './hanlerSaga';

function* rootSaga() {
  yield fork(onLoadPost)
  yield fork(onCreatePost)
  yield fork(onLoadComment)
  yield fork(onCreateComment)
}

export default rootSaga;