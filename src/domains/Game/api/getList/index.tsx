import freetogame from '../../../../services/api/freetogame';

import { ResponseRaw } from './types';

export const request = async (): Promise<ResponseRaw> => {
  const response = await freetogame.get('/games', {});

  return response.data;
};

export default request;
