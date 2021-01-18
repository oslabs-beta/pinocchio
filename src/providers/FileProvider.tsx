import React, { useState } from 'react';

export const FileContext = React.createContext(null); // ! Throwing an error because of null

const FileProvider = ({ children }) => {
  const [myPath, setMyPath] = useState('start');
  const [fileTree, setFileTree] = useState([]);
  const [chosenFile, setChosenFile] = useState('');
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

  const chosenFileHandler = (chosen: string) => {
    console.log('hitting chosen handler');
    setChosenFile(chosen);
  }

  return (
    <FileContext.Provider value={{
      myPath, pathHandler, fileTree, fileTreeHandler, chosenFile, chosenFileHandler,
    }}
    >
      {children}
    </FileContext.Provider>
  );
};

export default FileProvider;
