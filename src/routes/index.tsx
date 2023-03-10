import { useRoutes } from 'react-router-dom';

import { Posts } from 'features/Posts/routes';
// import { useAuth } from '@/lib/auth';

// import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  // const auth = useAuth();

  const commonRoutes = [{ path: '/', element: <Posts /> }];

  // const routes = auth.user ? protectedRoutes : publicRoutes;
  const routes = publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
