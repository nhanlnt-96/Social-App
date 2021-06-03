import axios from 'axios';

axios.defaults.withCredentials = true;
const baseURL = 'http://localhost:3001/posts';

export const getAllPosts = async () => {
  return axios.get(baseURL);
};

export const getPostById = async (id) => {
  return axios.get(`${baseURL}/post-by-id/${id}`);
};

export const createPost = async (values) => {
  return axios.post(baseURL, {
    username: values.username,
    postText: values.postContent
  })
}