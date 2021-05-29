import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPostById } from "../../network/services/post";
import FeedCardPostDetail from "../../components/feedCardPostDetail";

import './PostDetail.scss';

const PostDetail = () => {
  const [postData, setPostData] = useState([]);
  const [isBusy, setIsBusy] = useState(true);
  let {id} = useParams();

  useEffect(() => {
    const getPostDataById = async () => {
      await getPostById(id).then((response) => {
        setPostData(response.data);
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        setIsBusy(false)
      })
    }
    getPostDataById();
  }, [id]);

  return (
    <div className='post-container'>
      <div className='post-sider'>
        <FeedCardPostDetail postData={postData} />
      </div>
      <div className='post-content'>

      </div>
    </div>
  )
}

export default PostDetail;