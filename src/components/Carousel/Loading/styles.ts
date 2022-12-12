import styled from 'styled-components';

import { Skeleton } from '../../Skeleton';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 600px;
  overflow: hidden;
`;

export const BackdropSkeleton = styled(Skeleton)`
  width: 100%;
  height: 100%;
`;
