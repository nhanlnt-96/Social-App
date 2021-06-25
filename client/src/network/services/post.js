import axios from 'axios';
import { message } from 'antd';

const baseURL = 'https://social-app-lnt.herokuapp.com/posts';

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
};

export const deletePost = async (postId) => {
  return await axios.delete(`${baseURL}/${postId}`, {
    headers: {
      accessToken: localStorage.getItem('accessToken')
    }
  })
}

export const editPost = async (newPostText, postId) => {
  return await axios.put(`${baseURL}/edit-post`, {
    newPostText: newPostText,
    id: postId
  }, {
    headers: {
      accessToken: localStorage.getItem('accessToken')
    }
  }).then((response) => {
    message.success('Post edited 👍');
    return response;
  })
}