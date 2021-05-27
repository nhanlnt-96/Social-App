import React from 'react';
import { Card, Avatar } from 'antd';
import {
  CommentOutlined,
  DeleteOutlined,
  LikeOutlined
} from '@ant-design/icons';

import './FeedCard.scss';

const {Meta} = Card;

const FeedCard = ({allPosts}) => {
  return (
    <div className='feed-container' style={{padding: 24, minHeight: 380}}>
      {
        allPosts.map((val, index) => {
          return (
            <Card
              style={{width: 400}}
              key={index}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <LikeOutlined key="like" />,
                <CommentOutlined key="comment" />,
                <DeleteOutlined key="delete" />,
              ]}
            >
              <Meta
                avatar={<Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={val.username}
                description={val.postText}
              />
            </Card>
          )
        })
      }
    </div>
  )
};

export default FeedCard;