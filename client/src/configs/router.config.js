import PostBorder from '../components/postBorder';
import PageNotFound from '../containers/pageNotFound';
import HomePage from '../containers/homepage';
import CreatePost from '../components/createPost';

export const routes = [
  {
    path: '/',
    isExact: true,
    module: HomePage
  },
  {
    path: '/create-post',
    isExact: true,
    module: CreatePost //just for design will delete when project done
  },
  {
    path: '/post',
    isExact: true,
    module: PostBorder //just for design will delete when project done
  },
  {
    path: '*',
    isExact: true,
    module: PageNotFound
  }
]