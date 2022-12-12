import React, { useCallback } from 'react';
import { FaSort, FaSortAlphaUp, FaSortAlphaDown } from 'react-icons/fa';

import { useSearchInput } from '../SearchInput/hooks';
import { Container, Icon } from './styles';

const SortBy = (): JSX.Element => {
  const { sortAsc, setSortAsc } = useSearchInput();

  const sortIcons = [<FaSort />, <FaSortAlphaDown />, <FaSortAlphaUp />];

  const toggleSortAsc = useCallback(() => {
    if (sortAsc === 2) {
      setSortAsc(0);
      return;
    }

    setSortAsc(sortAsc + 1);
  }, [setSortAsc, sortAsc]);

  return (
    <Container onClick={toggleSortAsc}>
      <Icon>{sortIcons[sortAsc]}</Icon>
    </Container>
  );
};

export default SortBy;
