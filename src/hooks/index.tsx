import React from 'react';

import { GameProvider } from '../domains/Game/hooks';

const AppProvider = ({ children }: any) => (
  <GameProvider>{children}</GameProvider>
);

export default AppProvider;
