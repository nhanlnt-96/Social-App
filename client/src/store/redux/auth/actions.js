import {
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS
} from './actionTypes';

export const registerUser = (values) => {
  return {
    type: REGISTER_USER,
    payload: values
  }
}

export const registerSuccess = (values) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: values
  }
}

export const registerFail = (values) => {
  return {
    type: REGISTER_USER_FAIL,
    payload: values
  }
}

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

export const loginFail = (values) => {
  return {
    type: LOGIN_USER_FAIL,
    payload: values
  }
}