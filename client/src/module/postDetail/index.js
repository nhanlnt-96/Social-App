import React from 'react';
import FeedCardPostDetail from '../../components/feedCardPostDetail';
import CommentList from '../../components/comment';
import CommentInput from '../../components/commentInput';

import './PostDetail.scss';

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