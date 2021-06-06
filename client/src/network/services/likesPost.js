import axios from 'axios';

const baseURL = 'http://localhost:3001/likes';

export const likesPost = async (postId) => {
  return await axios.post(baseURL, {
    PostId: postId
  }, {
    headers: {
      accessToken: localStorage.getItem('accessToken')
    }
  })
};