import React, { useEffect, useCallback } from 'react';

import { getGame } from '../../domains/Game/api';

const Game: React.FC = () => {
  const getGameDetails = useCallback(async () => {
    const response = await getGame();
    console.log('🚀 ~ file: index.tsx:8 ~ getGames ~ response', response);

    return response;
  }, []);

  useEffect(() => {
    getGameDetails();
  }, []); // eslint-disable-line

  return <div>Game</div>;
};

export default Game;
