import React, {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

export type LogType = {
  id: string;
  title: string;
  body: string;
  date: string;
};

type LogContextType = {
  logs: LogType[];
  onCreate: ({title, body, date}) => void;
};

const mock3Data: LogType[] = [
  {
    id: uuidv4(),
    title: '아이템 1',
    body: '내용 1',
    date: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    title: '아이템 2',
    body: '내용 2',
    date: new Date(Date.now() - 1000 * 60 * 3).toISOString(),
  },
  {
    id: uuidv4(),
    title: '아이템 3',
    body: '내용 3',
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
  },
];

const mock10Data: LogType[] = Array.from({length: 10}).map((_, index) => ({
  id: uuidv4(),
  title: `아이템 ${index}`,
  body: `내용 ${index}`,
  date: new Date().toISOString(),
}));

const LogContext = createContext<LogContextType | undefined>(undefined);

export function LogContextProvider({children}) {
  const [logs, setLogs] = useState(mock10Data);

  const onCreate = ({title, body, date}) => {
    console.log('uuid : ', uuidv4());
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };

    setLogs([log, ...logs]);
  };

  return (
    <LogContext.Provider value={{logs, onCreate}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
