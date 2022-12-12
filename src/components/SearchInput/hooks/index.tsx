import React, { createContext, useContext, useState } from 'react';
import { SortBy } from '../../../shared/enums';
import ContextData from '../types/ContextData';

const SearchInputContext = createContext<ContextData>({} as ContextData);

const SearchInputProvider = ({ children }: any): JSX.Element => {
  const [keyword, setKeyword] = useState('');
  const [sortAsc, setSortAsc] = useState(SortBy.None);

  return (
    <SearchInputContext.Provider
      value={{
        keyword,
        setKeyword,
        sortAsc,
        setSortAsc,
      }}
    >
      {children}
    </SearchInputContext.Provider>
  );
};

function useSearchInput(): ContextData {
  const context = useContext(SearchInputContext);

  if (!context) {
    throw new Error(
      'useSearchInput must be used within an SearchInputProvider.',
    );
  }

  return context;
}

export { SearchInputProvider, useSearchInput };
