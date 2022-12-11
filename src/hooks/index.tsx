import React from 'react';

import { SearchInputProvider } from '../components/SearchInput/hooks';
import { GameProvider } from '../domains/Game/hooks';

const AppProvider = ({ children }: any): JSX.Element => (
  <SearchInputProvider>
    <GameProvider>{children}</GameProvider>
  </SearchInputProvider>
);

export default AppProvider;
