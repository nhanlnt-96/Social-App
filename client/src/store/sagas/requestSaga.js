import { call, put } from 'redux-saga/effects';
import { createPost, getAllPosts } from '../../network/services/post';
import { loadPostFail, loadPostSuccess } from '../redux/posts/actions';
import { createComment, getCommentById } from '../../network/services/comment';
import { loadCommentFail, loadCommentSuccess } from '../redux/comments/actions';

//post
export function* onCreatePostRequest(action) {
  try {
    yield call(createPost, action.payload)
    const response = yield call(getAllPosts);
    yield put(loadPostSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* onLoadPostStartAsync() {
  try {
    const response = yield call(getAllPosts);
    yield put(loadPostSuccess(response.data));
  } catch (error) {
    yield put(loadPostFail(error));
  }
}


//comment
export function* onCreateCommentRequest(action) {
  try {
    yield call(createComment, action.payload.id, action.payload.commentBody)
    const response = yield call(getAllPosts);
    yield put(loadPostSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* onLoadCommentStartAsync(action) {
  try {
    const response = yield call(getCommentById, action.payload);
    yield put(loadCommentSuccess(response.data));
  } catch (error) {
    yield put(loadCommentFail(error));
  }
}

