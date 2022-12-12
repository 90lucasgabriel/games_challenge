import freetogame from '../../../../services/api/freetogame';

import { ResponseRaw } from './types';

export const request = async (): Promise<ResponseRaw | undefined> => {
  try {
    const response = await freetogame.get('/games', {});

    return response.data;
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
};

export default request;
