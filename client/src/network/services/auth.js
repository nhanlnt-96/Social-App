import axios from 'axios';
import Cookies from 'js-cookie';

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
    const accessToken = response.data;
    Cookies.set('access-token', accessToken);
  })
}

