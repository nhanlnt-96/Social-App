import React, { useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loadPostStart } from "../../store/redux/posts/actions";
import PostInput from "../../components/postInput";
import FeedCard from "../../components/feedCard";
import { Skeleton } from "antd";

import './Homepage.scss';

const Homepage = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => ({...state.allPostsData}));

  useEffect(() => {
    dispatch(loadPostStart());
  }, [dispatch]);

  return (
    <div className='homepage'>
      <div className='create-post'>
        <PostInput />
      </div>
      <div className='news-feed'>
        {state.loading ? <Skeleton active avatar paragraph={{rows: 10}} /> : <FeedCard allPosts={state.allPosts} />}
      </div>
    </div>
  )
}

export default withRouter(Homepage);
