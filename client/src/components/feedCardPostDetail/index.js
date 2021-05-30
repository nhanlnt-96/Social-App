import React, { useEffect, useState } from 'react';
import { Card, Avatar } from 'antd';
import {
  DeleteOutlined,
  LikeOutlined
} from '@ant-design/icons';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../network/services/post';


const {Meta} = Card;

const FeedCardPostDetail = () => {
  const [postData, setPostData] = useState([]);
  let {id} = useParams();

  useEffect(() => {
    const getPostDataById = async () => {
      await getPostById(id).then((response) => {
        setPostData(response.data);
      }).catch((error) => {
        console.log(error);
      })
    };
    getPostDataById();
  }, [id]);

  return (
    <div style={{padding: '24px 0', minHeight: 380}}>
      <Card
        style={{width: '100%'}}
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
          title={`${postData.username} (${moment(postData.createdAt).format('DD/MM/YYYY - HH:mm')})`}
          description={postData.postText}
        />
      </Card>
    </div>
  )
};

export default FeedCardPostDetail;