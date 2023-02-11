import { Test } from 'features/Posts/routes';
import { Post } from 'features/Post/routes';

export const publicRoutes = [
  {
    path: '/test*',
    element: <Test />,
  },
  {
    path: '/post*',
    element: <Post />,
  },
];
