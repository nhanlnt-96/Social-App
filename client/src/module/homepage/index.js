import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PostInput from "../../components/postInput";
import FeedCard from "../../components/feedCard";
import { getAllPosts } from "../../network/services/post";
import { Skeleton } from "antd";

import './Homepage.scss';

const Homepage = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isBusy, setIsBusy] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      await getAllPosts().then((response) => {
        setAllPosts(response.data);
        setIsBusy(false);
      }).catch((error) => {
        console.log(error)
      })
    }
    getPost();
  }, []);

  console.log(isBusy)

  return (
    <div className='homepage'>
      <div className='create-post'>
        <PostInput />
      </div>
      <div className='news-feed'>
        {isBusy ? <Skeleton active avatar paragraph={{rows: 10}} /> : <FeedCard allPosts={allPosts} />}
      </div>
    </div>
  )
}

export default withRouter(Homepage);
