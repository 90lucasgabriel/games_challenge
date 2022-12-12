import React, { useEffect, useCallback, useState, useMemo } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import GameParams from './type';
import { Response as GameResponse } from '../../domains/Game/api/getGame/types';
import { useGame } from '../../domains/Game/hooks';
import { useSearchInput } from '../../components/SearchInput/hooks';

import Theme from '../../shared/styles/Theme';
import {
  ButtonLink,
  Carousel,
  Header,
  Pill,
  SizedBox,
  Tile,
} from '../../components';
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
  ButtonContainer,
  DetailsContainer,
  DescriptionBoxContainer,
  DescriptionLabel,
  CarouselContainer,
  InfoBoxContainer,
  InfoContainer,
  SubtitleContainer,
  RequirementsContainer,
  RequirementsTitle,
  ShortDescriptionLabel,
} from './styles';

const Home: React.FC = () => {
  const { id } = useParams<GameParams>();
  const history = useHistory();

  const { getGame } = useGame();
  const { setKeyword } = useSearchInput();

  const [game, setGame] = useState({} as GameResponse);

  const carouselImages = useMemo(
    () =>
      game?.screenshots
        ? game?.screenshots?.map(screenshot => screenshot.image)
        : [],
    [game],
  );

  const searchKeyword = useCallback(
    async (value: string) => {
      await setKeyword(value);
      history.push('/');
    },
    [history, setKeyword],
  );

  const getGameDetails = useCallback(async () => {
    const response = await getGame({ id: Number(id) });
    setGame(response);
  }, [getGame, id]);

  useEffect(() => {
    getGameDetails();
  }, []); // eslint-disable-line

  return (
    <>
      <Header />
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
            <SubtitleContainer>
              <PublisherLabel>{game.publisher}</PublisherLabel>
              <Pill>{game.genre}</Pill>
            </SubtitleContainer>

            <SizedBox height={Theme.Size.XSmall} />

            <ShortDescriptionLabel>
              {game?.shortDescription}
            </ShortDescriptionLabel>

            <SizedBox height={Theme.Size.Default} />

            <ButtonContainer>
              <ButtonLink
                title="PLAY GAME"
                to={game?.freetogameProfileUrl}
                target="_blank"
                native
              />
            </ButtonContainer>
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
              <Tile
                title="Developer"
                description={game?.developer}
                onClick={() => searchKeyword(game?.developer)}
                inline
              />
              <Tile
                title="Publisher"
                description={game?.publisher}
                onClick={() => searchKeyword(game?.publisher)}
                inline
              />
              <Tile
                title="Release Date"
                description={game?.releaseDate}
                inline
              />
              <Tile
                title="Genre"
                description={game?.genre}
                onClick={() => searchKeyword(game?.genre)}
                inline
              />
              <Tile
                title="Platform"
                description={game?.platform}
                onClick={() => searchKeyword(game?.platform)}
                inline
              />
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
    </>
  );
};

export default Home;
