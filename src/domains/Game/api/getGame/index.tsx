import freetogame from '../../../../services/api/freetogame';
import { ResponseRaw, Params } from './types';

export const request = async (params?: Params): Promise<ResponseRaw> => {
  const response = await freetogame.get('/game', {
    params: { id: params?.id },
  });
  return response.data;
};

export default request;
