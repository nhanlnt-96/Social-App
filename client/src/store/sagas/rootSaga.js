import { fork } from 'redux-saga/effects';
import { onComment, onPost } from './hanlerSaga';

function* rootSaga() {
  yield fork(onPost)
  yield fork(onComment)
}

export default rootSaga;