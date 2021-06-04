import axios from 'axios';
import { message } from 'antd';

const baseURL = 'http://localhost:3001/comments';

export const createComment = async (id, commentBody) => {
  return axios.post(baseURL, {
    commentContent: commentBody,
    PostId: id
  }, {
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
}

export const getCommentById = async (id) => {
  return axios.get(`${baseURL}/${id}`);
}