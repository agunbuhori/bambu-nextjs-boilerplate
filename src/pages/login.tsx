import type { ChangeEvent } from 'react';
import React from 'react';

import { authenticate } from '@/services/AuthServices';

const LoginPage = () => {
  const [credentials, setCredentials] = React.useState({
    username: '',
    password: '',
  });

  const handleCredentials = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const login = async () => {
    const check = await authenticate(credentials);
    console.log(check);
  };

  return (
    <div>
      <input
        className="border border-gray-300 p-3"
        name="username"
        type="text"
        onChange={handleCredentials}
      />
      <input
        className="border border-gray-300 p-3"
        name="password"
        type="password"
        onChange={handleCredentials}
      />
      <button onClick={() => login()}>Submit</button>
    </div>
  );
};

export default LoginPage;
