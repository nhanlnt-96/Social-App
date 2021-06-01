import { fork } from 'redux-saga/effects';
import { onAuth, onComment, onPost } from './hanlerSaga';

function* rootSaga() {
  yield fork(onPost)
  yield fork(onComment)
  yield fork(onAuth)
}

export default rootSaga;