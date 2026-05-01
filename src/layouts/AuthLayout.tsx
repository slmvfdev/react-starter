import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@/store';
import { ROUTES } from '@/router/routes';
import { ConfigProvider } from 'antd';
import { useTheme } from '@/hooks/useTheme';
import { lightTheme, darkTheme } from 'common-ui-theme';

export function AuthLayout() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const { mode, color } = useTheme();

  if (isAuthenticated) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return (
    <ConfigProvider theme={mode === 'dark' ? darkTheme(color) : lightTheme(color)}>
    <div className="min-h-dvh flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 p-4">
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
    </ConfigProvider>
  );  
}
