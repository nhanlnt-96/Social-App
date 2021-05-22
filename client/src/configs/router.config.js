import PostBorder from '../components/postBorder';
import PageNotFound from '../containers/pageNotFound';

export const routes = [
  {
    path: '/post',
    isExact: true,
    module: PostBorder
  },
  {
    path: '*',
    isExact: true,
    module: PageNotFound
  }
]