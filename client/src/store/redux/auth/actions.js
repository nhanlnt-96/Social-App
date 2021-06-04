import {
  GET_USER_NAME,
  LOGIN_USER_SUCCESS,
} from './actionTypes';

export const loginSuccess = () => {
  return {
    type: LOGIN_USER_SUCCESS
  }
}

export const getUsername = (username) => {
  return {
    type: GET_USER_NAME,
    payload: username
  }
}