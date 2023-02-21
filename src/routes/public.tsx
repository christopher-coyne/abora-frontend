import { Test } from 'features/Posts/routes';
import { Post } from 'features/Post/routes';
import { SubmitPost } from 'features/SubmitPost/routes';
// make submit post protected after doing auth
export const publicRoutes = [
  {
    path: '/test*',
    element: <Test />,
  },
  {
    path: '/post*',
    element: <Post />,
  },
  {
    path: '/submit-post',
    element: <SubmitPost />,
  },
];
