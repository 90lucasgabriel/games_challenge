import React, { createContext, useCallback, useContext } from 'react';

import { parseGame, parseGameList } from '../helpers/parse';

import ContextData from '../types/ContextData';
import { getGame as getGameApi, getGameList as getGameListApi } from '../api';
import { Response as GameListResponse } from '../api/getList/types';
import {
  Params as GameParams,
  Response as GameResponse,
} from '../api/getGame/types';

const GameContext = createContext<ContextData>({} as ContextData);

const GameProvider = ({ children }: any) => {
  const getGame = useCallback(
    async (params: GameParams): Promise<GameResponse> => {
      const responseRaw = await getGameApi(params);
      const response = parseGame(responseRaw);

      return response;
    },
    [],
  );

  const getGameList = useCallback(async (): Promise<GameListResponse> => {
    const responseRaw = await getGameListApi();
    const response = parseGameList(responseRaw);

    return response;
  }, []);

  return (
    <GameContext.Provider
      value={{
        getGame,
        getGameList,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

function useGame(): ContextData {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGame must be used within an GameProvider.');
  }

  return context;
}

export { GameProvider, useGame };
