import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loadPostStart } from "../../store/redux/posts/actions";

const PostDetail = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => ({...state.allPostsData}));

  useEffect(() => {
    dispatch(loadPostStart());
  }, [dispatch]);

  let {id} = useParams();
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}

export default PostDetail;