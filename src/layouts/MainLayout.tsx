import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu, Button, Select, Dropdown, Avatar, theme } from 'antd';
import { ConfigProvider } from 'antd';
import {
  LayoutDashboard,
  ShieldCheck,
  Moon,
  Sun,
  LogOut,
  User,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';
import { lightTheme, darkTheme } from 'common-ui-theme';
import { useTheme } from '@/hooks/useTheme';
import { useAppSelector, useAppDispatch } from '@/store';
import { logout } from '@/store/slices/authSlice';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ROUTES } from '@/router/routes';
import { useTranslation } from 'react-i18next';
import { Role } from '@/types/auth.types';
import type { MenuProps } from 'antd';

const { Sider, Header, Content } = Layout;

export function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { token: antdToken } = theme.useToken();

  const user = useAppSelector((state) => state.auth.user);
  const { mode, color, toggleMode, changeColor, themeOptions } = useTheme();

  const handleLogout = () => {
    dispatch(logout());
    navigate(ROUTES.LOGIN);
  };

  const menuItems: MenuProps['items'] = [
    {
      key: ROUTES.DASHBOARD,
      icon: <LayoutDashboard size={18} />,
      label: t('sidebar.dashboard'),
      onClick: () => navigate(ROUTES.DASHBOARD),
    },
  ];

  const adminMenuItem: MenuProps['items'] = [
    {
      key: ROUTES.ADMIN,
      icon: <ShieldCheck size={18} />,
      label: t('sidebar.admin'),
      onClick: () => navigate(ROUTES.ADMIN),
    },
  ];

  const userMenuItems: MenuProps['items'] = [
    {
      key: 'user-info',
      label: (
        <div className="flex flex-col py-1">
          <span className="font-semibold">{user?.username}</span>
          <span className="text-xs opacity-60">{user?.role}</span>
        </div>
      ),
      disabled: true,
    },
    { type: 'divider' },
    {
      key: 'logout',
      icon: <LogOut size={14} />,
      label: t('logout'),
      danger: true,
      onClick: handleLogout,
    },
  ];

  const selectedKeys = [location.pathname];

  const siderItems = user?.role === Role.ADMIN
    ? [...(menuItems ?? []), ...(adminMenuItem ?? [])]
    : menuItems;

  return (
    <ConfigProvider theme={mode === 'dark' ? darkTheme(color) : lightTheme(color)}>
      <Layout className="min-h-dvh">
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          breakpoint="lg"
          trigger={null}
          width={240}
          className="fixed! bg-(--color-bg-container)! border-r border-(--color-border-secondary) left-0 top-0 bottom-0 z-20 overflow-y-auto"
        >
          <div className="h-16 flex items-center justify-center gap-2 px-4 border-b border-(--color-border-secondary)">
            {!collapsed && (
              <span className="text-lg font-bold tracking-tight truncate">
                {t('appName')}
              </span>
            )}
          </div>

          <Menu
            mode="inline"
            selectedKeys={selectedKeys}
            items={siderItems}
            className="border-none! mt-2"
          />
        </Sider>

        <Layout
          style={{ marginLeft: collapsed ? 80 : 240, transition: 'margin-left 0.2s' }}
        >
          <Header
            className="flex items-center !bg-(--color-bg-container) border-b border-(--color-border-secondary) justify-between px-6 sticky top-0 z-10"
            style={{
              height: 64,
              padding: '0 24px',
            }}
          >
            <div className="flex items-center gap-2">
              <Button
                type="text"
                icon={
                  collapsed ? (
                    <PanelLeftOpen size={18} />
                  ) : (
                    <PanelLeftClose size={18} />
                  )
                }
                onClick={() => setCollapsed(!collapsed)}
              />
            </div>

            <div className="flex items-center gap-3">
              <LanguageSwitcher />

              <Button
                onClick={toggleMode}
                variant="filled"
                icon={mode === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              />

              <Select
                value={color}
                style={{ width: 120 }}
                onChange={changeColor}
                options={themeOptions}
              />

              <Dropdown menu={{ items: userMenuItems }} trigger={['click']} placement="bottomRight">
                <Button type="text" className="flex items-center gap-2 h-auto! py-1">
                  <Avatar
                    size={32}
                    icon={<User size={16} />}
                    style={{ backgroundColor: antdToken.colorPrimary }}
                  />
                  {user?.username && (
                    <span className="hidden sm:inline font-medium">{user.username}</span>
                  )}
                </Button>
              </Dropdown>
            </div>
          </Header>

          <Content className="p-6">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
