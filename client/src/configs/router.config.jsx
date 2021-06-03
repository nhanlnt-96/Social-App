import Homepage from '../module/homepage';
import PostDetail from '../module/postDetail';
import PageNotFound from '../module/pageNotFound';
import { LoginPage } from '../module/auth/LoginPage';
import { RegisterPage } from '../module/auth/RegisterPage';

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
    isExact: true,
    isPrivate: false,
    module: <PostDetail />
  },
  {
    path: '*',
    isExact: true,
    module: <PageNotFound />
  }
];