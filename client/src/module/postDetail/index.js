import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../network/services/post';
import FeedCardPostDetail from '../../components/feedCardPostDetail';
import CommentList from '../../components/comment';

import './PostDetail.scss';
import CommentInput from '../../components/commentInput';

const PostDetail = () => {
  return (
    <div className="post-container">
      <div className="post-header">
        <FeedCardPostDetail />
      </div>
      <div className="post-content">
        <div className="comment-input">
          <CommentInput />
        </div>
        <div className="comment-list">
          <CommentList />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;