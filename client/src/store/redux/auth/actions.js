import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
} from './actionTypes';

export const loginUser = (values) => {
  return {
    type: LOGIN_USER,
    payload: values
  }
}

export const loginSuccess = (values) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: values
  }
}