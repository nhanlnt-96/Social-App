import Homepage from '../module/homepage';
import PostDetail from '../module/postDetail';
import PageNotFound from '../module/pageNotFound';
import { LoginPage } from '../module/auth/LoginPage';
import { RegisterPage } from '../module/auth/RegisterPage';
import ProfilePage from '../module/profilePage';

export const routes = [
  {
    path: '/',
    isExact: true,
    isPrivate: true,
    module: <Homepage />
  },
  {
    path: '/login',
    isExact: true,
    module: <LoginPage />
  },
  {
    path: '/register',
    isExact: true,
    module: <RegisterPage />
  },
  {
    path: '/posts/:id',
    isPrivate: true,
    isExact: true,
    module: <PostDetail />
  },
  {
    path: '/profile/:id',
    isPrivate: true,
    isExact: true,
    module: <ProfilePage />
  },
  {
    path: '*',
    isExact: true,
    module: <PageNotFound />
  }
];