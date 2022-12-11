import React, { useEffect, useCallback, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import GameParams from './type';
import { Response as GameResponse } from '../../domains/Game/api/getGame/types';
import { useGame } from '../../domains/Game/hooks';

import Theme from '../../shared/styles/Theme';
import { Carousel, Pill, SizedBox } from '../../components';
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
  InlineItemContainer,
  InlineItemTitle,
  InlineItemLabel,
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
            <InlineItemContainer>
              <InlineItemTitle>Developer</InlineItemTitle>
              <InlineItemLabel>{game?.developer}</InlineItemLabel>
            </InlineItemContainer>

            <InlineItemContainer>
              <InlineItemTitle>Publisher</InlineItemTitle>
              <InlineItemLabel>{game?.publisher}</InlineItemLabel>
            </InlineItemContainer>

            <InlineItemContainer>
              <InlineItemTitle>Release Date</InlineItemTitle>
              <InlineItemLabel>{game?.releaseDate}</InlineItemLabel>
            </InlineItemContainer>

            <InlineItemContainer>
              <InlineItemTitle>Platform</InlineItemTitle>
              <InlineItemLabel>{game?.platform}</InlineItemLabel>
            </InlineItemContainer>
          </InfoContainer>
          <RequirementsContainer>
            <RequirementsTitle>Minimum System Requirements</RequirementsTitle>

            <ItemContainer>
              <ItemTitle>Graphics</ItemTitle>
              <ItemLabel>{game?.minimumSystemRequirements?.graphics}</ItemLabel>
            </ItemContainer>

            <ItemContainer>
              <ItemTitle>Memory</ItemTitle>
              <ItemLabel>{game?.minimumSystemRequirements?.memory}</ItemLabel>
            </ItemContainer>

            <ItemContainer>
              <ItemTitle>OS</ItemTitle>
              <ItemLabel>{game?.minimumSystemRequirements?.os}</ItemLabel>
            </ItemContainer>

            <ItemContainer>
              <ItemTitle>Processor</ItemTitle>
              <ItemLabel>
                {game?.minimumSystemRequirements?.processor}
              </ItemLabel>
            </ItemContainer>

            <ItemContainer>
              <ItemTitle>Storage</ItemTitle>
              <ItemLabel>{game?.minimumSystemRequirements?.storage}</ItemLabel>
            </ItemContainer>
          </RequirementsContainer>
        </InfoBoxContainer>
      </DetailsContainer>
    </Container>
  );
};

export default Home;
