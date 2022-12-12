import React, { useCallback, useEffect, useState } from 'react';

import CarouselProps from './types';
import { CarouselLoading } from '..';
import { Container, FeaturedImage } from './styles';

const Carousel = ({ images, isLoading }: CarouselProps): JSX.Element => {
  const [index, setIndex] = useState(0);

  const autoUpdate = useCallback(() => {
    setInterval(() => {
      index === images.length - 1 ? setIndex(0) : setIndex(index + 1);
    }, 3000);
  }, [index, images.length]);

  useEffect(() => {
    autoUpdate();
  }, [autoUpdate]);

  if (isLoading) {
    return <CarouselLoading />;
  }

  return (
    <Container>
      <FeaturedImage src={images[index]} />
    </Container>
  );
};

export default Carousel;
