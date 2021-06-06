import { fork } from 'redux-saga/effects';
import { onComment, onLike, onPost } from './handlerSaga';

function* rootSaga() {
  yield fork(onPost)
  yield fork(onComment)
  yield fork(onLike)
}

export default rootSaga;