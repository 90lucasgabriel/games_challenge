import React from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

import { useSearchInput } from './hooks';
import { Container, Input, ClearButton, IconButton } from './styles';

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

      <ClearButton onClick={() => setKeyword('')} show={keyword?.length > 0}>
        <FaTimes />
      </ClearButton>

      <IconButton to="/">
        <FaSearch />
      </IconButton>
    </Container>
  );
};

export default SearchInput;
