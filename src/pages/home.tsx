import React from 'react';

import AuthGuard, { AuthContext } from '@/layouts/AuthGuard';

const DashboardPage = () => {
  const authContext = React.useContext(AuthContext);

  return <AuthGuard>{JSON.stringify(authContext)}</AuthGuard>;
};

export default DashboardPage;
