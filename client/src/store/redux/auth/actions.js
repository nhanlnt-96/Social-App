import {
  GET_AUTH_FAIL,
  GET_AUTH_START,
  GET_AUTH_SUCCESS,
  LOGIN_USER_SUCCESS, LOGOUT_USER,
} from './actionTypes';

export const loginSuccess = (values) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: values
  }
}

export const getAuthStart = () => {
  return {
    type: GET_AUTH_START
  }
}

export const getAuthSuccess = (values) => {
  return {
    type: GET_AUTH_SUCCESS,
    payload: values
  }
}

export const getAuthError = (error) => {
  return {
    type: GET_AUTH_FAIL,
    payload: error
  }
}

export const logOutSuccess = () => {
  return {
    type: LOGOUT_USER
  }
}