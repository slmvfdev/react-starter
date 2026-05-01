import { ConfigProvider } from 'antd';
import { Outlet } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { lightTheme, darkTheme } from 'common-ui-theme';

export function ErrorLayout() {
    const { mode, color } = useTheme();

    return (
        <ConfigProvider theme={mode === 'dark' ? darkTheme(color) : lightTheme(color)}>
            <div className="min-h-dvh flex">
                <Outlet />
            </div>
        </ConfigProvider>

    )
}