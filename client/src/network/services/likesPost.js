import axios from 'axios';

const baseURL = 'https://social-app-lnt.herokuapp.com/likes';

export const likesPost = async (postId) => {
  return await axios.post(baseURL, {
    PostId: postId
  }, {
    headers: {
      accessToken: localStorage.getItem('accessToken')
    }
  })
};