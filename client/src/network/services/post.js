import axios from 'axios';
import { message } from 'antd';

const baseURL = 'http://localhost:3001/posts';

export const getAllPosts = async () => {
  return axios.get(baseURL, {
    headers: {
      accessToken: localStorage.getItem('accessToken')
    }
  }).then((response) => {
    const {data} = response;
    if (data.error) {
      message.error('You need to Sig Up/Log In 👏');
    } else {
      return response
    }
  });
};

export const getPostById = async (id) => {
  return await axios.get(`${baseURL}/post-by-id/${id}`);
};

export const getPostByUser = async (id) => {
  return await axios.get(`${baseURL}/post-by-user/${id}`);
};

export const createPost = async (values) => {
  return await axios.post(baseURL, {
    postText: values.postContent
  }, {
    headers: {
      accessToken: localStorage.getItem('accessToken')
    }
  })
}

export const deletePost = async (postId) => {
  return await axios.delete(`${baseURL}/${postId}`, {
    headers: {
      accessToken: localStorage.getItem('accessToken')
    }
  })
}