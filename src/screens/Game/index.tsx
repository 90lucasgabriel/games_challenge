import React, { useEffect, useCallback } from 'react';

import { useGame } from '../../domains/Game/hooks';

const Game: React.FC = () => {
  const { getGame } = useGame();

  const getGameDetails = useCallback(async () => {
    const response = await getGame();
    console.log('🚀 ~ file: index.tsx:8 ~ getGames ~ response', response); // eslint-disable-line

    return response;
  }, [getGame]);

  useEffect(() => {
    getGameDetails();
  }, []); // eslint-disable-line

  return <div>Game</div>;
};

export default Game;
