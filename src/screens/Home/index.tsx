import React, { useEffect, useCallback } from 'react';

import { useGame } from '../../domains/Game/hooks';

const Home: React.FC = () => {
  const { getGameList } = useGame();

  const getGames = useCallback(async () => {
    const response = await getGameList();
    console.log('🚀 ~ file: index.tsx:8 ~ getGames ~ response', response); // eslint-disable-line

    return response;
  }, [getGameList]);

  useEffect(() => {
    getGames();
  }, []); // eslint-disable-line

  return <div>Home</div>;
};

export default Home;
