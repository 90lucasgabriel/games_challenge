import styled from 'styled-components';
import Theme from '../../shared/styles/Theme';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 600px;
  overflow: hidden;
  background: ${Theme.Color.WhiteAplha};
`;

export const FeaturedImage = styled.img`
  width: 100%;
  min-height: 100%;
  object-fit: cover;

  transition: all 0.5s ease;
`;
