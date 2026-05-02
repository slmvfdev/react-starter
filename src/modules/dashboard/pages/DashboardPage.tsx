import { Card, Tag, Typography } from 'antd';
import { LayoutDashboard, ShieldCheck, Users } from 'lucide-react';
import { useAppSelector } from '@/store';
import { CanAccess } from '@/components/CanAccess';
import { Role } from '@/types/auth.types';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

const roleColorMap: Record<Role, string> = {
  [Role.ADMIN]: 'red',
  [Role.MANAGER]: 'blue',
  [Role.USER]: 'green',
};

export function DashboardPage() {
  const user = useAppSelector((state) => state.auth.user);
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <Title level={3} className="mb-1!">
          {t('dashboard.welcome', { name: user?.username })}
        </Title>
        <Text type="secondary">{t('dashboard.subtitle')}</Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card hoverable>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
              <LayoutDashboard size={24} className="text-blue-500" />
            </div>
            <div>
              <Text strong className="text-base!">
                {t('dashboard.role')}
              </Text>
              <div className="mt-2">
                <Tag color={user?.role ? roleColorMap[user.role] : 'default'}>
                  {user?.role}
                </Tag>
              </div>
            </div>
          </div>
        </Card>

        <Card hoverable>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
              <Users size={24} className="text-green-500" />
            </div>
            <div>
              <Text strong className="text-base!">
                {t('dashboard.email')}
              </Text>
              <div className="mt-2">
                <Text type="secondary">{user?.email}</Text>
              </div>
            </div>
          </div>
        </Card>

        <CanAccess roles={[Role.ADMIN, Role.MANAGER]}>
          <Card hoverable>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                <ShieldCheck size={24} className="text-amber-500" />
              </div>
              <div>
                <Text strong className="text-base!">
                  {t('dashboard.management')}
                </Text>
                <div className="mt-2">
                  <Text type="secondary">{t('dashboard.managementDesc')}</Text>
                </div>
              </div>
            </div>
          </Card>
        </CanAccess>
      </div>
    </div>
  );
}
