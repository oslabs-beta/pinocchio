import React, { useState } from 'react';
export const FileContext = React.createContext(null); // ! Throwing an error because of null

const FileProvider = ({ children }) => {
  const [myPath, setMyPath] = useState('start');
  const [fileTree, setFileTree] = useState([]);
  // lifecycle methods --> useEffect

  // any other functions/handlers we need to interact with our state
  const pathHandler = (pathValue: string) => {
    // eslint-disable-next-line no-console
    console.log('hitting provider handler');
    setMyPath(pathValue);
    // TODO: redirect logic here
  };
  const fileTreeHandler = (tree: any) => {
    console.log('hitting tree handler');
    setFileTree(tree);
  };

  return (
    <FileContext.Provider value={{ myPath, pathHandler, fileTree, fileTreeHandler }}>
      {children}
    </FileContext.Provider>
  );
};

export default FileProvider;
