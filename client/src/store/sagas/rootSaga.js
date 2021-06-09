import { fork } from 'redux-saga/effects';
import { onAuth, onComment, onLike, onPost } from './handlerSaga';

function* rootSaga() {
  yield fork(onPost)
  yield fork(onComment)
  yield fork(onLike)
  yield fork(onAuth)
}

export default rootSaga;