import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Avatar } from 'antd';
import {
  CommentOutlined,
  DeleteOutlined,
  LikeOutlined
} from '@ant-design/icons';
import moment from 'moment';
import AvatarImg from '../../assets/8c4ac8c19d21687f3130.jpeg';
import PostImg from '../../assets/post-img.jpeg';

import './FeedCard.scss';

const {Meta} = Card;

const FeedCard = ({allPosts}) => {
  let history = useHistory();

  return (
    <div className="feed-container" style={{padding: 24, minHeight: 380}}>
      {
        allPosts.sort((x, y) => new Date(y.createdAt).getTime() - new Date(x.createdAt).getTime())
          .map((val, index) => {
            return (
              <Card
                style={{width: 400}}
                key={index}
                cover={
                  <img
                    alt="example"
                    src={PostImg}
                  />
                }
                actions={[
                  <LikeOutlined key="like" />,
                  <CommentOutlined key="comment" onClick={() => {
                    history.push(`/posts/${val.id}`)
                  }} />,
                  <DeleteOutlined key="delete" />,
                ]}
              >
                <Meta
                  avatar={<Avatar src={AvatarImg} />}
                  title={val.username}
                  description={`${moment(val.createdAt).format('DD/MM/YYYY - HH:mm')}: ${val.postText}`}
                />
              </Card>
            )
          })
      }
    </div>
  )
};

export default FeedCard;