import React, { useEffect, useCallback, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import GameParams from './type';
import { Response as GameResponse } from '../../domains/Game/api/getGame/types';
import { useGame } from '../../domains/Game/hooks';

import Theme from '../../shared/styles/Theme';
import { Carousel, Pill, SizedBox, Tile } from '../../components';
import {
  Container,
  BackgroundImage,
  SummaryBoxContainer,
  FeaturedImageContainer,
  FeaturedImage,
  SummaryContainer,
  NameContainer,
  NameLabel,
  PublisherLabel,
  ShortDescriptionLabel,
  DetailsContainer,
  DescriptionBoxContainer,
  DescriptionLabel,
  CarouselContainer,
  InfoBoxContainer,
  InfoContainer,
  InfoLabel,
  RequirementsContainer,
  RequirementsTitle,
  ItemContainer,
  ItemTitle,
  ItemLabel,
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

      <SummaryBoxContainer>
        <SummaryContainer>
          <NameContainer>
            <NameLabel>{game?.title}</NameLabel>
          </NameContainer>

          <SizedBox height={Theme.Size.XSmall} />
          <PublisherLabel>{game.publisher}</PublisherLabel>
          <SizedBox height={Theme.Size.XSmall} />
          <Pill>{game.genre}</Pill>
          <SizedBox height={Theme.Size.Small} />

          <ShortDescriptionLabel>
            {game?.shortDescription}
          </ShortDescriptionLabel>
        </SummaryContainer>

        <FeaturedImageContainer>
          <FeaturedImage src={game?.thumbnail} />
        </FeaturedImageContainer>
      </SummaryBoxContainer>

      <DetailsContainer>
        <DescriptionBoxContainer>
          <DescriptionLabel>{game?.description}</DescriptionLabel>
        </DescriptionBoxContainer>

        <CarouselContainer>
          <Carousel images={carouselImages} />
        </CarouselContainer>

        <InfoBoxContainer>
          <InfoContainer>
            <Tile title="Developer" description={game?.developer} inline />
            <Tile title="Publisher" description={game?.publisher} inline />
            <Tile title="Release Date" description={game?.releaseDate} inline />
            <Tile title="Genre" description={game?.genre} inline />
            <Tile title="Platform" description={game?.platform} inline />
          </InfoContainer>
          <RequirementsContainer>
            <RequirementsTitle>Minimum System Requirements</RequirementsTitle>
            <Tile
              title="Graphics"
              description={game?.minimumSystemRequirements?.graphics}
            />
            <Tile
              title="Memory"
              description={game?.minimumSystemRequirements?.memory}
            />
            <Tile
              title="OS"
              description={game?.minimumSystemRequirements?.os}
            />
            <Tile
              title="Processor"
              description={game?.minimumSystemRequirements?.processor}
            />
            <Tile
              title="Storage"
              description={game?.minimumSystemRequirements?.storage}
            />
          </RequirementsContainer>
        </InfoBoxContainer>
      </DetailsContainer>
    </Container>
  );
};

export default Home;
