import React, { useState } from 'react';
export const FileContext = React.createContext(null); // ! Throwing an error because of null

const FileProvider = (props) => {
  const [myPath, setMyPath] = useState('start');
  const pathHandler = (pathValue: string) => {
    // eslint-disable-next-line no-console
    console.log('hitting provider handler');
    setMyPath(pathValue);
    // TODO: redirect logic here
  };

  return (
    <FileContext.Provider value={{ myPath, pathHandler }}>
      {props.children}
    </FileContext.Provider>
  );
};

export default FileProvider;
