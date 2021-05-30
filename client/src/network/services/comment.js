import axios from 'axios';

const baseURL = 'http://localhost:3001/comments';

export const createComment = async (id, commentBody) => {
  return axios.post(baseURL, {
    commentContent: commentBody,
    PostId: id
  });
}

export const getCommentById = async () => {
  return axios.get(baseURL);
}