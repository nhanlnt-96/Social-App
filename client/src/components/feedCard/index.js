import React from 'react';
import { useHistory } from 'react-router-dom';
import { CommentOutlined } from '@ant-design/icons';
import { Avatar, Card, Empty } from 'antd';
import moment from 'moment';

import './FeedCard.scss';
import LikeSystem from '../likeSystem';
import DeleteSystem from '../deleteSystem';
import { useSelector } from 'react-redux';
import PostUsername from '../postUsername';
import EditPost from '../editPost';

const { Meta } = Card;

const FeedCard = ({ allPosts }) => {
  let history = useHistory();
  const isAuth = useSelector(state => ({ ...state.isAuth }));
  return (
    <div className="feed-container" style={{ padding: 24 }}>
      {
        (allPosts && allPosts.length > 0) ? allPosts.sort((x, y) => new Date(y.createdAt).getTime() - new Date(x.createdAt).getTime())
          .map((val, index) => {
            return (
              <Card
                style={{ width: 400 }}
                key={index}
                cover={
                  val.postImageURL &&
                  <img alt={val._id} src={val.postImageURL} />
                }
                actions={
                  val.user.username === isAuth.userAuth.username ?
                    [
                      <LikeSystem postId={val._id}
                                  likes={val.Likes && val.Likes.length} />,
                      <CommentOutlined key="comment" onClick={() => {
                        history.push(`/posts/${val._id}`)
                      }} />,
                      <EditPost postText={val.postText} postId={val._id} />,
                      <DeleteSystem data={val} />
                    ] : [
                      <LikeSystem postId={val._id}
                                  likes={val.Likes && val.Likes.length}
                                  userId={val.UserId} />,
                      <CommentOutlined key="comment" onClick={() => {
                        history.push(`/posts/${val._id}`)
                      }} />
                    ]
                }>
                <Meta
                  avatar={<Avatar src={val.user.avatarImageURL} />}
                  title={<PostUsername username={val.user.username}
                                       userId={val.UserId} />}
                  description={`${moment(val.createdAt).format('DD/MM/YYYY -' +
                    ' HH:mm')}: ${val.postText ? val.postText : ''}`}
                />
              </Card>
            )
          }) : <Empty />
      }
    </div>
  );
}

export default FeedCard;
