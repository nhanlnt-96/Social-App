import axios from 'axios';

const baseURL = 'http://localhost:3001/posts';

export const getAllPosts = async () => {
  return await axios.get(baseURL);
};

export const getPostById = async (id) => {
  return await axios.get(`${baseURL}/post-by-id/${id}`).then((response) => {
    return response;
  });
};

export const createPost = async (values) => {
  return await axios.post(baseURL, {
    username: values.username,
    postText: values.postContent
  })
}