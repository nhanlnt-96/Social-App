import {
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS
} from './actionTypes';

const initialState = {
  loading: false,
  isLogged: false,
  response: null,
  error: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.payload
      }
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case LOGIN_USER_SUCCESS:
      const {data} = action.payload;
      if (data.error) {
        return {
          ...state,
          loading: false,
          response: data.error
        }
      }
      return {
        ...state,
        loading: false,
        isLogged: true,
        response: action.payload
      }
    case LOGIN_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default authReducer;