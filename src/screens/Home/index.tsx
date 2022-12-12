import React, { useEffect, useCallback, useMemo } from 'react';

import { useGame } from '../../domains/Game/hooks';
import { useSearchInput } from '../../components/SearchInput/hooks';

import { BoxContainer, Header, GameList } from '../../components';
import { Container } from './styles';

const Home = (): JSX.Element => {
  const { getGameList, gameList } = useGame();
  const { keyword } = useSearchInput();

  const getGames = useCallback(async () => {
    await getGameList();
  }, [getGameList]);

  const gameListFiltered = useMemo(() => {
    if (!keyword || keyword?.length === 0) {
      return gameList;
    }

    return gameList.filter(
      item =>
        item?.title?.toUpperCase()?.includes(keyword?.toUpperCase()) ||
        item?.shortDescription
          ?.toUpperCase()
          ?.includes(keyword?.toUpperCase()) ||
        item?.publisher?.toUpperCase()?.includes(keyword?.toUpperCase()),
    );
  }, [keyword, gameList]);

  useEffect(() => {
    getGames();
  }, []); // eslint-disable-line

  return (
    <>
      <Header />
      <Container>
        <BoxContainer>
          <GameList data={gameListFiltered} />
        </BoxContainer>
      </Container>
    </>
  );
};

export default Home;
