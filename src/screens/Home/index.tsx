import React, { useEffect, useCallback } from 'react';

import { getGameList } from '../../domains/Game/api';

const Home: React.FC = () => {
  const getGames = useCallback(async () => {
    const response = await getGameList();
    console.log('🚀 ~ file: index.tsx:8 ~ getGames ~ response', response);

    return response;
  }, []);

  useEffect(() => {
    getGames();
  }, []); // eslint-disable-line

  return <div>Home</div>;
};

export default Home;
