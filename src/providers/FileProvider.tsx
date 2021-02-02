import React, { useState } from 'react';

export const FileContext = React.createContext(null);

const FileProvider = ({ children }: any) => {
  const [myPath, setMyPath] = useState('');
  const [fileTree, setFileTree] = useState([]);
  const [chosenFile, setChosenFile] = useState('');
  const [testFileName, setTestFileName] = useState('');
  const [toggleTree, setToggleTree] = useState(true);


  const pathHandler = (pathValue: string): void => {
    setMyPath(pathValue);
  };
  const fileTreeHandler = (tree: any): void => {
    setFileTree(tree);
  };

  const chosenFileHandler = (chosen: string): void => {
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
