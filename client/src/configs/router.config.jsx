import Homepage from "../module/homepage";
import PostDetail from "../module/postDetail";
import PageNotFound from "../module/pageNotFound";

export const routes = [
  {
    path: '/',
    isExact: true,
    module: <Homepage />
  },
  {
    path: '/post/:id',
    isExact: true,
    module: <PostDetail />
  },
  {
    path: '*',
    isExact: true,
    module: <PageNotFound />
  }
];