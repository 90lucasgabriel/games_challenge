import { Dispatch, SetStateAction } from 'react';

export default interface ContextData {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
}
