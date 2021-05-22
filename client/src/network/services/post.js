import axios from 'axios';

const baseURL = 'http://localhost:3001';

export const getAllPosts = async () => {
  return axios.get(`${baseURL}/posts`);
};

export const createPost = async (values) => {
  return axios.post(`${baseURL}/posts`, {
    username: values.username,
    postText: values.postContent
  })
}