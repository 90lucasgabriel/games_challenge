import React, { useEffect, useCallback, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import GameParams from './type';
import { Response as GameResponse } from '../../domains/Game/api/getGame/types';
import { useGame } from '../../domains/Game/hooks';

import { Carousel } from '../../components';
import {
  Container,
  BackgroundImage,
  FeaturedImageContainer,
  FeaturedImage,
  GameListContainer,
} from './styles';

const Home: React.FC = () => {
  const { id } = useParams<GameParams>();
  const { getGame } = useGame();

  const [game, setGame] = useState({} as GameResponse);

  const carouselImages = useMemo(
    () =>
      game?.screenshots
        ? game?.screenshots?.map(screenshot => screenshot.image)
        : [],
    [game],
  );

  const getGameDetails = useCallback(async () => {
    const response = await getGame({ id: Number(id) });
    setGame(response);
  }, [getGame, id]);

  useEffect(() => {
    getGameDetails();
  }, []); // eslint-disable-line

  return (
    <Container>
      <BackgroundImage
        src={game?.screenshots ? game.screenshots[0].image : game.thumbnail}
      />

      <Carousel images={carouselImages} />
      <FeaturedImageContainer>
        <FeaturedImage
          src={game?.screenshots ? game.screenshots[0].image : game.thumbnail}
        />
      </FeaturedImageContainer>
      <GameListContainer>{id}</GameListContainer>
    </Container>
  );
};

export default Home;
