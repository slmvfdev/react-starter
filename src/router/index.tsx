import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AuthLayout } from '@/layouts/AuthLayout';
import { MainLayout } from '@/layouts/MainLayout';
import { AuthGuard } from '@/router/guards/AuthGuard';
import { RoleGuard } from '@/router/guards/RoleGuard';
import { LoginPage } from '@/modules/auth/pages/LoginPage';
import { DashboardPage } from '@/modules/dashboard/pages/DashboardPage';
import { AdminPage } from '@/modules/dashboard/pages/AdminPage';
import { Role } from '@/types/auth.types';
import { ROUTES } from './routes';
import { ErrorLayout } from '@/layouts/ErrorLayout';
import { ErrorPage } from 'common-ui-theme';

export const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },

  {
    element: <AuthGuard />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: '/',
            element: <Navigate to={ROUTES.DASHBOARD} replace />,
          },
          {
            path: ROUTES.DASHBOARD,
            element: <DashboardPage />,
          },
          {
            element: <RoleGuard allowedRoles={[Role.ADMIN]} />,
            children: [
              {
                path: ROUTES.ADMIN,
                element: <AdminPage />,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    element: <ErrorLayout />,
    children: [
      {
        path: ROUTES.FORBIDDEN,
        element: <ErrorPage code={403} />
      },
      {
        path: "*",
        element: <ErrorPage code={404} />
      },
      {
        path: ROUTES.SERVER_ERROR,
        element: <ErrorPage code={500} />
      }
    ]
  }
]);
