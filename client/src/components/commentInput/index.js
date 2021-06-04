import React, { useState } from 'react';
import { Input, Button, Form } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createCommentRequest } from '../../store/redux/comments/actions';

const {TextArea} = Input;

const CommentInput = () => {
  let {id} = useParams();
  const dispatch = useDispatch();
  const [commentBody, setCommentBody] = useState('');

  const onCommentBtnClick = async () => {
    dispatch(createCommentRequest(id, commentBody));
    setCommentBody('');
  }

  return (
    <>
      <Form.Item>
        <TextArea autoSize value={commentBody} onChange={(e) => setCommentBody(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary" disabled={(commentBody === '') ? true : false}
                onClick={onCommentBtnClick}>
          Comment
        </Button>
      </Form.Item>
    </>
  )
}

export default CommentInput;