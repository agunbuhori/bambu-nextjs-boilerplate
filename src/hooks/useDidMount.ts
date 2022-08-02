import React from 'react';

const useDidMount = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(false);
  }, []);

  return mounted;
};

export default useDidMount;
