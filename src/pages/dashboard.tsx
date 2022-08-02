import Link from 'next/link';
import React from 'react';

import { AuthContext } from '@/layouts/AuthGuard';

const DashboardPage = () => {
  const authContext = React.useContext(AuthContext);

  return (
    <>
      <h1>R : {authContext.name}</h1>
      <Link href="/home">HOme</Link>
    </>
  );
};

export default DashboardPage;
