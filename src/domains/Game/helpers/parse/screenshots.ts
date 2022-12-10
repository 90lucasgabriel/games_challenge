import { Screenshot, ScreenshotRaw } from 'domains/Game/types';

const parseScreenshots = (valueRaw: ScreenshotRaw[]): Screenshot[] => {
  let response = [] as Screenshot[];

  valueRaw.forEach(item => {
    const parsedValue = {
      id: item.id,
      image: item.image,
    } as Screenshot;

    response = [...response, parsedValue];
  });

  return response;
};

export default parseScreenshots;
