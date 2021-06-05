import React, { useEffect } from 'react';
import { Comment, List } from 'antd';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadCommentStart } from '../../store/redux/comments/actions';
import DeleteCommentConfirm from '../deleteCommentConfirm';

const CommentList = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const state = useSelector(state => ({...state.allCommentsData}));
  const isAuthState = useSelector(state => ({...state.isAuth}));

  useEffect(() => {
    dispatch(loadCommentStart(id))
  }, [dispatch, id]);

  console.log(state)

  return (
    <List
      className="comment-list"
      header={`${state.allComments.length} repl${(state.allComments.length > 1) ? 'ies' : 'y'}`}
      itemLayout="horizontal"
      dataSource={state.allComments}
      renderItem={item => (
        <li>
          <Comment
            actions={(isAuthState.response === item.username) ?
              [<DeleteCommentConfirm commentId={item.id} />] : ''}
            author={item.username}
            content={item.commentContent}
            datetime={moment(item.createdAt).format('DD/MM/YYYY - HH:mm')}
          />
        </li>
      )}
    />
  )
};

export default CommentList;