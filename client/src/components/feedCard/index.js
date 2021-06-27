import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Avatar, Empty } from 'antd';
import {
  CommentOutlined
} from '@ant-design/icons';
import moment from 'moment';
import AvatarImg from '../../assets/8c4ac8c19d21687f3130.png';

import './FeedCard.scss';
import LikeSystem from '../likeSystem';
import DeleteSystem from '../deleteSystem';
import { useSelector } from 'react-redux';
import PostUsername from '../postUsername';
import EditPost from '../editPost';

const {Meta} = Card;

const FeedCard = ({allPosts}) => {
  let history = useHistory();
  const isAuth = useSelector(state => ({...state.isAuth}));
  console.log(isAuth)

  return (
    <div className="feed-container" style={{padding: 24, minHeight: 380}}>
      {
        (allPosts && allPosts.length > 0) ? allPosts.sort((x, y) => new Date(y.createdAt).getTime() - new Date(x.createdAt).getTime())
          .map((val, index) => {
            return (
              <Card
                style={{width: 400}}
                key={index}
                cover={
                  <img alt="example" src={val.postFile}
                  />
                }
                actions={
                  val.username === isAuth.userAuth.username ?
                    [
                      <LikeSystem postId={val._id} likes={val.Likes && val.Likes.length} />,
                      <CommentOutlined key="comment" onClick={() => {
                        history.push(`/posts/${val._id}`)
                      }} />,
                      <EditPost postText={val.postText} postId={val._id} />,
                      <DeleteSystem postId={val._id} />
                    ] : [
                      <LikeSystem postId={val._id} likes={val.Likes && val.Likes.length} userId={val.UserId} />,
                      <CommentOutlined key="comment" onClick={() => {
                        history.push(`/posts/${val._id}`)
                      }} />
                    ]
                }>
                <Meta
                  avatar={<Avatar src={AvatarImg} />}
                  title={<PostUsername username={val.username} userId={val.UserId} />}
                  description={`${moment(val.createdAt).format('DD/MM/YYYY - HH:mm')}: ${val.postText}`}
                />
              </Card>
            )
          }) : <Empty />
      }
    </div>
  );
}

export default FeedCard;