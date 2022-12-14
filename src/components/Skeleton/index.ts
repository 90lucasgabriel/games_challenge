import styled from 'styled-components';
import Theme from '../../shared/styles/Theme';

export const Skeleton = styled.div`
  background-image: linear-gradient(
    -90deg,
    rgba(227, 227, 227, 0.5) 0%,
    rgba(249, 249, 249, 0.7) 50%,
    rgba(227, 227, 227, 0.5) 100%
  );

  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;
  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
  &.white {
    background-image: linear-gradient(-90deg, #fff 0%, #e7edf1 50%, #fff 100%);
  }
`;

export const SkeletonLabel = styled(Skeleton)`
  display: flex;
  height: 16px;
  border-radius: ${Theme.Size.XLarge};
`;

export const SkeletonLabel25 = styled(SkeletonLabel)`
  width: 25%;
`;

export const SkeletonLabel50 = styled(SkeletonLabel)`
  width: 50%;
`;

export const SkeletonLabel75 = styled(SkeletonLabel)`
  width: 75%;
`;

export const SkeletonLabel100 = styled(SkeletonLabel)`
  width: 100%;
`;
