import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.withCredentials = true
const baseURL = 'http://localhost:3001/auth';

export const registerRequest = async (values) => {
  return axios.post(baseURL, {
    username: values.username,
    password: values.password
  })
};

export const loginRequest = async (values) => {
  return axios.post(`${baseURL}/login`, {
    username: values.username,
    password: values.password
  }).then((response) => {
    Cookies.set('access-token', response.data);
    return response;
  })
}