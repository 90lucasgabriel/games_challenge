import React from 'react';
import Lottie from 'react-lottie';
import NoResultFound from '../../assets/lottie/no-result-found5.json';

import GameListProps from './types';

import { GameItem } from '..';
import {
  NoResultContainer,
  Label,
  Container,
  GameItemContainer,
} from './styles';

const GameList = ({ data }: GameListProps): JSX.Element | null => {
  if (!data) {
    return null;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NoResultFound,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  if (data?.length === 0) {
    return (
      <NoResultContainer>
        <Lottie options={defaultOptions} height={400} width={400} />
        <Label>No Result Found.</Label>
      </NoResultContainer>
    );
  }

  return (
    <Container>
      {data.map(item => {
        return (
          <GameItemContainer key={item.id}>
            <GameItem data={item} />
          </GameItemContainer>
        );
      })}
    </Container>
  );
};

export default GameList;
