import React, { useEffect, useCallback, useState } from 'react';

import { Response as GameListResponse } from '../../domains/Game/api/getList/types';
import { useGame } from '../../domains/Game/hooks';

import { GameList } from '../../components';
import { Container, GameListContainer } from './styles';

const Home: React.FC = () => {
  const { getGameList } = useGame();

  const [gameList, setGameList] = useState([] as GameListResponse);

  const getGames = useCallback(async () => {
    const response = await getGameList();
    setGameList(response);
  }, [getGameList]);

  useEffect(() => {
    getGames();
  }, []); // eslint-disable-line

  return (
    <Container>
      <GameListContainer>
        <GameList data={gameList} />
      </GameListContainer>
    </Container>
  );
};

export default Home;
