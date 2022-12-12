import React, { useEffect, useCallback, useMemo } from 'react';

import { SortBy } from '../../shared/enums';
import { useGame } from '../../domains/Game/hooks';
import { useSearchInput } from '../../components/SearchInput/hooks';

import { BoxContainer, Header, GameList } from '../../components';
import { Container } from './styles';

const Home = (): JSX.Element => {
  const { getGameList, gameList } = useGame();
  const { keyword, sortAsc } = useSearchInput();

  const getGames = useCallback(async () => {
    await getGameList();
  }, [getGameList]);

  const gameListFiltered = useMemo(() => {
    let response = [];
    if (!keyword || keyword?.length === 0) {
      response = gameList;
    }

    // Filter game list
    response = gameList.filter(
      item =>
        item?.title?.toUpperCase()?.includes(keyword?.toUpperCase()) ||
        item?.shortDescription
          ?.toUpperCase()
          ?.includes(keyword?.toUpperCase()) ||
        item?.publisher?.toUpperCase()?.includes(keyword?.toUpperCase()) ||
        item?.developer?.toUpperCase()?.includes(keyword?.toUpperCase()) ||
        item?.genre?.toUpperCase()?.includes(keyword?.toUpperCase()) ||
        item?.platform?.toUpperCase()?.includes(keyword?.toUpperCase()),
    );

    // Sort game list
    let sortedResponse = response;
    if (sortAsc === SortBy.Asc || sortAsc === SortBy.Desc) {
      sortedResponse = response.sort((a, b) => {
        if (a?.title < b?.title) {
          return -1;
        }
        if (a?.title > b?.title) {
          return 1;
        }
        return 0;
      });
    }

    if (sortAsc === SortBy.Desc) {
      sortedResponse = sortedResponse.reverse();
    }

    return sortedResponse;
  }, [keyword, gameList, sortAsc]);

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
