import React from 'react';

import './PostUsename.scss';
import { useHistory } from 'react-router-dom';

const PostUsername = ({username, userId}) => {
  const history = useHistory();

  const onShowProfilePageBtn = () => {
    history.push(`/profile/${userId}`);
  }

  return (
    <div className="username-hover" onClick={onShowProfilePageBtn}>
      {username}
    </div>
  );
};

export default PostUsername;