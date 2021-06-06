import React, { useEffect } from 'react';
import { Card, Avatar } from 'antd';
import {
  DeleteOutlined
} from '@ant-design/icons';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import AvatarImg from '../../assets/8c4ac8c19d21687f3130.jpeg';
import PostImg from '../../assets/post-img.jpeg';
import LikeSystem from '../likeSystem';
import { useDispatch, useSelector } from 'react-redux';
import { loadPostByIdStart, loadPostStart } from '../../store/redux/posts/actions';

const {Meta} = Card;

const FeedCardPostDetail = () => {
  let {id} = useParams();
  const state = useSelector(state => ({...state.allPostsData}));
  const {postById} = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostByIdStart(id));
  }, [id, dispatch]);

  return (
    <div style={{padding: '24px 0', minHeight: 380}}>
      <Card
        style={{width: '100%'}}
        key={postById.id}
        cover={
          <img
            alt="example"
            src={PostImg}
          />
        }
        actions={[
          <LikeSystem postId={postById.id} likes={postById.Likes && postById.Likes.length} />,
          <DeleteOutlined key="delete" />,
        ]}
      >
        <Meta
          avatar={<Avatar src={AvatarImg} />}
          title={postById.username}
          description={`${moment(postById.createdAt).format('DD/MM/YYYY - HH:mm')}: ${postById.postText}`}
        />
      </Card>
    </div>
  )
};

export default FeedCardPostDetail;