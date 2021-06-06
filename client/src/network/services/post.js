import axios from 'axios';
import { message } from 'antd';

const baseURL = 'http://localhost:3001/posts';

export const getAllPosts = async () => {
  return await axios.get(baseURL, {
    headers: {
      accessToken: localStorage.getItem('accessToken')
    }
  }).then((response) => {
    const {data} = response;
    if (data.error) {
      message.error('You need to login');
    } else {
      return response
    }
  });
};

export const getPostById = async (id) => {
  return await axios.get(`${baseURL}/post-by-id/${id}`).then((response) => {
    return response;
  });
};

export const createPost = async (values) => {
  return await axios.post(baseURL, {
    postText: values.postContent
  })
}