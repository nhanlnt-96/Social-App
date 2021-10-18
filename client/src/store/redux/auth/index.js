import {
  GET_AUTH_FAIL,
  GET_AUTH_START,
  GET_AUTH_SUCCESS,
  LOGIN_USER_SUCCESS, LOGOUT_USER,
} from './actionTypes';

const initialState = {
  loading: false,
  isLogged: false,
  response: '',
  userAuth: '',
  error: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLogged: true,
        response: action.payload
      }
    case GET_AUTH_START:
      return {
        ...state,
        loading: true
      }
    case GET_AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogged: true,
        userAuth: action.payload
      }
    case GET_AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case LOGOUT_USER:
      return {
        ...state,
        isLogged: false
      }
    default:
      return state;
  }
}

export default authReducer;
