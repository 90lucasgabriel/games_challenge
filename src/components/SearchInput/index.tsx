import React from 'react';

import { useSearchInput } from './hooks';
import { Container, Input } from './styles';

const SearchInput = (): JSX.Element => {
  const { keyword, setKeyword } = useSearchInput();

  const onChangeKeyword = (value: any): void => {
    setKeyword(value.target.value);
  };

  return (
    <Container>
      <Input
        placeholder="Search..."
        onChange={value => onChangeKeyword(value)}
        value={keyword}
      />
    </Container>
  );
};

export default SearchInput;
