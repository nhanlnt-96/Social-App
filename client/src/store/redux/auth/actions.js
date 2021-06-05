import {
  LOGIN_USER_SUCCESS, LOGOUT_USER,
} from './actionTypes';

export const loginSuccess = (values) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: values
  }
}

export const logOutSuccess = () => {
  return {
    type: LOGOUT_USER
  }
}