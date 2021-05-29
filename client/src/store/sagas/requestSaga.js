import { call, put } from 'redux-saga/effects';
import { createPost, getAllPosts } from "../../network/services/post";
import { loadPostFail, loadPostSuccess } from "../redux/posts/actions";

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

