import axios from 'axios';

axios.defaults.withCredentials = true;
const baseURL = 'http://localhost:3001/comments';

export const createComment = async (id, commentBody) => {
  return axios.post(baseURL, {
    commentContent: commentBody,
    PostId: id
  });
}

export const getCommentById = async (id) => {
  return axios.get(`${baseURL}/${id}`);
}