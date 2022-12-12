import freetogame from '../../../../services/api/freetogame';
import { ResponseRaw, Params } from './types';

export const request = async (
  params?: Params,
): Promise<ResponseRaw | undefined> => {
  try {
    const response = await freetogame.get('/game', {
      params: { id: params?.id },
    });

    return response.data;
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
};

export default request;
