import styled from 'styled-components';
import Theme from '../../shared/styles/Theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: ${Theme.Size.Medium};
  background: ${Theme.Color.WhiteAplha};
  border: 1px ${Theme.Color.WhiteAplha} solid;

  transition: all 0.5s ease;

  &:hover {
    margin-top: -10px;
    background: ${Theme.Color.WhiteAplhaSelected};
    box-shadow: 0px 10px 25px 0px rgb(234, 104, 255, 0.3);
    cursor: pointer;

    img {
      width: 105%;
      height: 105%;
      margin-top: -10px;
    }
  }
`;

export const PosterContainer = styled.div`
  display: flex;
  height: 165px;
  border-radius: ${Theme.Size.Medium};
  object-fit: cover;
  align-items: center;
  justify-content: center;
`;

export const PosterImage = styled.img`
  object-fit: fill;
  width: 100%;
  height: 100%;
  background: ${Theme.Color.WhiteAplha};

  transition: all 0.5s ease;
`;

export const InfoContainer = styled.div`
  padding: ${Theme.Size.Default};
  min-height: 24rem;
`;

export const NameContainer = styled.div``;

export const NameLabel = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 3.6rem;
  max-height: 13rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PublisherLabel = styled.p`
  font-size: ${Theme.Size.Small};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 1.5rem;
  max-height: 3.5rem;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const GenreContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const DescriptionLabel = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 2.4rem;
  max-height: 9.6rem;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
