import React from 'react';
import { Card, Avatar } from 'antd';
import {
  DeleteOutlined,
  LikeOutlined
} from '@ant-design/icons';

const {Meta} = Card;

const FeedCardPostDetail = ({postData}) => {
  return (
    <div style={{padding: 24, minHeight: 380}}>
      <Card
        style={{width: 400}}
        key={postData.id}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <LikeOutlined key="like" />,
          <DeleteOutlined key="delete" />,
        ]}
      >
        <Meta
          avatar={<Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={postData.username}
          description={postData.postText}
        />
      </Card>
    </div>
  )
};

export default FeedCardPostDetail;