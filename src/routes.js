import { Suspense, Fragment, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';


import Layout from './layouts/MainLayout';

export const RenderRoutes = ({ routes = [] }) => (
  <Suspense fallback={<LoadingScreen />}>
    <Routes>
      {routes.map((route, i) => {
        // const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            element={
              // <Guard>
                <Layout>
                  {route.routes ? <RenderRoutes routes={route.routes} /> : <Element />}
                </Layout>
              // </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes = [
  {
    exact: true,
    // guard: GuestGuard,
    path: '/sign-in',
    element: lazy(() => import('./pages/Auth/SignIn')),
  },
  {
    path: '/',
    // guard: AuthGuard,
    layout: Layout,
    routes: [
      {
        exact: true,
        path: '/',
        element: lazy(() => import('./pages/Home')),
      },

      {
        path: '*',
        element: lazy(() => import('./pages/Auth/NotFound')),
      },
    ],
  },
];

export default routes;
