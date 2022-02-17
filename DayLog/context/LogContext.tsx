import React, {createContext, useState} from 'react';

const LogContext = createContext<LogContextType | undefined>(undefined);
type LogContextType = {
  text: string;
  handleTextChange: (value: string) => void;
};

export function LogContextProvider({children}) {
  const [text, setText] = useState('');

  const handleTextChange = (value: string) => {
    setText(value);
  };

  return (
    <LogContext.Provider value={{text, handleTextChange}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
