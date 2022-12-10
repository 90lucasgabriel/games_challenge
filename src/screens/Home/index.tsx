import React, { useEffect, useCallback } from 'react';

import { getList } from '../../domains/Game/api';

const Home: React.FC = () => {
  const getGameList = useCallback(async () => {
    const response = await getList();

    return response;
  }, []);

  useEffect(() => {
    getGameList();
  }, []);

  return <div>Home2</div>;
};

export default Home;
