import { call, put } from 'redux-saga/effects';
import { getAllPosts } from "../../network/services/post";
import { loadPostFail, loadPostSuccess } from "../redux/posts/actions";

export function* onLoadPostStartAsync() {
  try {
    const response = yield call(getAllPosts);
    yield put(loadPostSuccess(response.data));
  } catch (error) {
    yield put(loadPostFail(error));
  }
}