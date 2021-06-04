import {
  LOGIN_USER_SUCCESS,
} from './actionTypes';

const initialState = {
  isLogged: false,
  error: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {isLogged: true}
    default:
      return state;
  }
}

export default authReducer;