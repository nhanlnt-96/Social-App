import React, { useEffect, useState } from 'react';
import { Card, Avatar, Skeleton } from 'antd';
import {
  CommentOutlined,
  DeleteOutlined,
  LikeOutlined
} from '@ant-design/icons';
import { getAllPosts } from '../../network/services/post';

import './FeedCard.scss';

const {Meta} = Card;

export const FeedCard = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isBusy, setIsBusy] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      await getAllPosts().then((response) => {
        setAllPosts(response.data);
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        setIsBusy(false);
      })
    }
    getPost();
  }, []);

  return (
    <>
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
                <LikeOutlined key="like"/>,
                <CommentOutlined key="comment"/>,
                <DeleteOutlined key="delete"/>,
              ]}
              loading={isBusy}
            >
              <Skeleton loading={isBusy} avatar active>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                  title={val.username}
                  description={val.postText}
                />
              </Skeleton>
            </Card>
          )
        })
      }
    </>
  )
}