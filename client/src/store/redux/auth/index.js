import {
  GET_USER_NAME,
  LOGIN_USER_SUCCESS,
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
        isLogged: true
      }
      case GET_USER_NAME:
      return {
        ...state,
        isLogged: true,
        response: action.payload
      }
    default:
      return state;
  }
}

export default authReducer;