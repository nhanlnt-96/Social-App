import axios from 'axios';

const baseURL = 'https://social-app-lnt.herokuapp.com/auth';

export const registerRequest = async (values, avatarImageURL) => {
  return axios.post(baseURL, {
    email: values.email,
    username: values.username,
    password: values.password,
    avatarImageURL
  })
};

export const loginRequest = async (values) => {
  return axios.post(`${baseURL}/login`, {
    username: values.username,
    password: values.password
  })
};

export const getAuth = async () => {
  return axios.get(`${baseURL}/auth-user`, {
    headers: {
      accessToken: localStorage.getItem('accessToken')
    }
  })
};

export const getUserProfile = async (id) => {
  return axios.get(`${baseURL}/profile/${id}`);
};

export const updatePassword = async (email, username, newPassword) => {
  return axios.put(`${baseURL}/change-password`, {
    email: email,
    username: username,
    password: newPassword
  });
};
