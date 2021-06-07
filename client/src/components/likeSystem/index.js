import React, { useEffect, useState } from 'react';
import { LikeOutlined } from '@ant-design/icons';
import { likePostStart } from '../../store/redux/likes/actions';
import { useDispatch, useSelector } from 'react-redux';

import './LikeSystem.scss';

const LikeSystem = ({postId, likes,userId}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => ({...state.allPostsData}));
  const [liked, setLiked] = useState([]);
  const {allPosts} = state;

  useEffect(() => {
    allPosts.likedPosts && setLiked(allPosts.likedPosts.map((val) => {
      return val.PostId;
    }));
  }, [dispatch, allPosts]);

  const onLikeBtnClick = async () => {
    dispatch(likePostStart(postId,userId));
  }

  return (
    <>
      {
        <LikeOutlined key="like" onClick={onLikeBtnClick}
                      className={liked.includes(postId) ? 'like-active' : ''}
        />
      }
      {likes}
    </>
  )
};

export default LikeSystem;