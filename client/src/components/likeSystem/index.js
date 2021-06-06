import React from 'react';
import { LikeOutlined } from '@ant-design/icons';
import { likePostStart } from '../../store/redux/likes/actions';
import { useDispatch, useSelector } from 'react-redux';

import './LikeSystem.scss';

const LikeSystem = ({postId, likes}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => ({...state.allLikesData}));

  const onLikeBtnClick = async () => {
    dispatch(likePostStart(postId));
  }

  return (
    <>
      {
        <LikeOutlined key="like" onClick={onLikeBtnClick} className={(state.isLiked.liked === true) && 'like-active'} />
      }
      {likes}
    </>
  )
};

export default LikeSystem;