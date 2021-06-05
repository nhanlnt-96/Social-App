import axios from 'axios';

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
    password: values.password,
    remember: values.remember
  })
}

export const getAuth = async () => {
  return axios.get(`${baseURL}/auth-user`, {
    headers: {
      accessToken: localStorage.getItem('accessToken')
    }
  })
}