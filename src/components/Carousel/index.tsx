import React, { useCallback, useEffect, useState } from 'react';

import CarouselProps from './types';
import { Container, FeaturedImage } from './styles';

const Carousel = ({ images }: CarouselProps): JSX.Element => {
  const [index, setIndex] = useState(0);

  const autoUpdate = useCallback(() => {
    setInterval(() => {
      index === images.length - 1 ? setIndex(0) : setIndex(index + 1);
    }, 4000);
  }, [index, images.length]);

  useEffect(() => {
    // autoUpdate();
  }, [autoUpdate]);

  return (
    <Container>
      <FeaturedImage src={images[index]} />
    </Container>
  );
};

export default Carousel;
