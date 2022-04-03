import type { NextPage } from 'next';
import Theme from 'components/Theme';
import dynamic from 'next/dynamic';

const AdminPanel = dynamic(() => import('components/AdminPanel'), {
  ssr: false,
});

const AdminPage: NextPage = () => (
  <Theme>
    <AdminPanel />
  </Theme>
);

export default AdminPage;
