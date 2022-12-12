import React, { useEffect, useCallback, useState, useMemo } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Game } from '../../domains/Game/types';
import GameParams from './type';
import { Response as GameResponse } from '../../domains/Game/api/getGame/types';
import { useGame } from '../../domains/Game/hooks';
import { useSearchInput } from '../../components/SearchInput/hooks';

import Theme from '../../shared/styles/Theme';
import { InfoTable, RequirementsTable } from './components';
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
  SubtitleContainer,
  ShortDescriptionLabel,
} from './styles';

const Home: React.FC = () => {
  const { id } = useParams<GameParams>();
  const history = useHistory();

  const { getGame, isGameLoading } = useGame();
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
    setGame(response ?? ({} as Game));
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
            <Carousel images={carouselImages} isLoading={isGameLoading} />
          </CarouselContainer>

          <InfoBoxContainer>
            <InfoTable
              game={game}
              onClick={searchKeyword}
              isLoading={isGameLoading}
            />
            <RequirementsTable game={game} isLoading={isGameLoading} />
          </InfoBoxContainer>
        </DetailsContainer>
      </Container>
    </>
  );
};

export default Home;
