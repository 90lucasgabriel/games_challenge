import {
  MinimumSystemRequirements,
  MinimumSystemRequirementsRaw,
} from 'domains/Game/types';

const parseMinimumSystemRequirements = (
  valueRaw: MinimumSystemRequirementsRaw,
): MinimumSystemRequirements => {
  const response = {
    graphics: valueRaw?.graphics ?? '-',
    memory: valueRaw?.memory ?? '-',
    os: valueRaw?.os ?? '-',
    processor: valueRaw?.processor ?? '-',
    storage: valueRaw?.storage ?? '-',
  } as MinimumSystemRequirements;

  return response;
};

export default parseMinimumSystemRequirements;
