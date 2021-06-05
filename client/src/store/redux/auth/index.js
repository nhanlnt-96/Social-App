import {
  LOGIN_USER_SUCCESS, LOGOUT_USER,
} from './actionTypes';

const initialState = {
  isLogged: false,
  response: '',
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