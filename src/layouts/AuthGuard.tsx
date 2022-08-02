import React, { useCallback } from 'react';

import useDidMount from '@/hooks/useDidMount';
import type { User } from '@/interfaces/User';
import { getCurrentUser } from '@/services/AuthServices';

type Props = {
  children?: React.ReactNode;
};

export const AuthContext = React.createContext<User>({} as User);

const AuthGuard = ({ children }: Props) => {
  const isMounted = useDidMount();
  const [user, setUser] = React.useState<User>({} as User);

  const fetchCurrentUser = useCallback(async () => {
    const currentUser = await getCurrentUser();
    if (currentUser) {
      setUser(user);
      sessionStorage.setItem('session', JSON.stringify(currentUser));
    }
  }, [user]);

  React.useEffect(() => {
    if (isMounted) {
      if (typeof window !== 'undefined') {
        const session = window.sessionStorage.getItem('session');
        if (session) {
          setUser(JSON.parse(session));
        } else {
          fetchCurrentUser();
        }
      }
    }
  }, [isMounted]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthGuard;
