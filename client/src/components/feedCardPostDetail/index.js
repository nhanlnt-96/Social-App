import React, { useEffect } from 'react';
import { Card, Avatar } from 'antd';
import moment from 'moment';
import { useHistory, useParams } from 'react-router-dom';
import LikeSystem from '../likeSystem';
import { useDispatch, useSelector } from 'react-redux';
import { loadPostByIdStart } from '../../store/redux/posts/actions';
import DeleteSystem from '../deleteSystem';
import { RollbackOutlined } from '@ant-design/icons';
import EditPost from '../editPost';
import PostUsername from '../postUsername';

const { Meta } = Card;

const FeedCardPostDetail = () => {
  let { id } = useParams();
  const state = useSelector(state => ({ ...state.allPostsData }));
  const isAuth = useSelector(state => ({ ...state.isAuth }));
  const { postById } = state;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadPostByIdStart(id));
  }, [id, dispatch]);

  return (
    <div style={{ padding: '24px 0', minHeight: 380 }}>
      {
        postById.map((val) => (
          <Card
            style={{ width: '100%' }}
            key={val._id}
            cover={
              val.postImageURL && <img alt={val._id} src={val.postImageURL} />
            }
            actions={
              val.username === isAuth.userAuth.username ?
                [
                  <LikeSystem postId={val._id}
                              likes={val.Likes && val.Likes.length} />,
                  <DeleteSystem postId={val._id} />,
                  <EditPost postId={val._id} postText={val.postText} />,
                  <RollbackOutlined key="roll-back" onClick={() => {
                    history.push('/')
                  }} />
                ] : [
                  <LikeSystem postId={val._id}
                              likes={val.Likes && val.Likes.length} />,
                  <RollbackOutlined key="roll-back" onClick={() => {
                    history.push('/')
                  }} />
                ]
            }
          >
            <Meta
              avatar={<Avatar src={val.avatarImageURL} />}
              title={<PostUsername username={val.username}
                                   userId={val.UserId} />}
              description={`${moment(val.createdAt).format('DD/MM/YYYY - HH:mm')}: ${val.postText}`}
            />
          </Card>
        ))
      }
    </div>
  );
};

export default FeedCardPostDetail;
