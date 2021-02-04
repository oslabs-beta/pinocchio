import React, { useState } from 'react';

const testMeLex: any = {};

export const FileContext = React.createContext(testMeLex); // ! Throwing an error because of null

const FileProvider = ({ children }: any) => {
  const [myPath, setMyPath] = useState('');
  const [fileTree, setFileTree] = useState([]);
  const [chosenFile, setChosenFile] = useState('');
  const [testFileName, setTestFileName] = useState('');
  const [toggleTree, setToggleTree] = useState(true);

  // lifecycle methods --> useEffect

  // any other functions/handlers we need to interact with our state
  const pathHandler = (pathValue: string): void => {
    // eslint-disable-next-line no-console
    // console.log("hitting provider handler");
    setMyPath(pathValue);
  };
  const fileTreeHandler = (tree: any): void => {
    // console.log("hitting tree handler");
    setFileTree(tree);
  };

  const chosenFileHandler = (chosen: string): void => {
    // console.log("hitting chosen handler");
    setChosenFile(chosen);
  };

  const handleToggleTree = (): void => {
    setToggleTree(!toggleTree);
  };

  return (
    <FileContext.Provider
      value={{
        myPath,
        pathHandler,
        fileTree,
        fileTreeHandler,
        chosenFile,
        chosenFileHandler,
        handleToggleTree,
        toggleTree,
        testFileName,
        setTestFileName,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

export default FileProvider;
