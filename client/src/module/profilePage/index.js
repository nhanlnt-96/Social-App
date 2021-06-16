import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../network/services/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  loadPostByUserStart,
  loadPostStart,
} from "../../store/redux/posts/actions";
import FeedCard from "../../components/feedCard";
import { Avatar } from "antd";
import AvatarImg from "../../assets/8c4ac8c19d21687f3130.png";

import "./ProfilePage.scss";

const ProfilePage = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const [userProfile, setUserProfile] = useState([]);
  const state = useSelector((state) => ({ ...state.allPostsData }));
  const { postByUser } = state;

  useEffect(() => {
    const getUserProfilePage = async () => {
      await getUserProfile(id).then((response) => {
        setUserProfile(response.data);
      });
    };
    getUserProfilePage();

    dispatch(loadPostByUserStart(id));
    dispatch(loadPostStart());
  }, [dispatch, id]);

  return (
    <div className='profile-page'>
      <div className='user-header'>
        <Avatar size='large' src={AvatarImg} />
        <h2>{userProfile.username}</h2>
      </div>
      <div className='user-posts'>
        <FeedCard allPosts={postByUser} />
      </div>
    </div>
  );
};

export default ProfilePage;
