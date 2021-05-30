import React from 'react';
import { Comment, List } from 'antd';
import { data } from '../../configs/commentList.config';

const CommentList = () => {
  return (
    <List
      className="comment-list"
      header={`${data.length} repl${(data.length > 1) ? 'ies' : 'y'}`}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <li>
          <Comment
            actions={item.actions}
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
          />
        </li>
      )}
    />
  )
}

export default CommentList;