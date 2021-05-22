import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../../network/services/post';

const PostBorder = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isBusy, setIsBusy] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      await getAllPosts().then((response) => {
        setAllPosts(response.data);
        setIsBusy(true);
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        setIsBusy(false);
      })
    }
    getPost();
  }, []);

  return (
    <div className="post-border">
      {
        allPosts.map(val => {
          const {username, postText} = val;
          return (
            <>
              {isBusy && console.log('loading...')}
              <h1>{`User: ${username}`}</h1>
              <p>{`Post content: ${postText}`}</p>
            </>
          )
        })
      }
    </div>
  )
};

export default PostBorder;