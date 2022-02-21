import React, {createContext, useState} from 'react';

type SearchContextType = {
  keyword: string;
  onChangeText: (text: string) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchContextProvider = ({children}) => {
  const [keyword, onChangeText] = useState('');
  return (
    <SearchContext.Provider value={{keyword, onChangeText}}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
