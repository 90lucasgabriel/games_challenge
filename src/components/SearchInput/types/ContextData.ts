import { Dispatch, SetStateAction } from 'react';
import { SortBy } from '../../../shared/enums';

export default interface ContextData {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
  sortAsc: SortBy;
  setSortAsc: Dispatch<SetStateAction<SortBy>>;
}
