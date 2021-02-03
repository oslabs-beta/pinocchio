/* eslint-disable-next-line no-use-before-define */
import React, { useState } from 'react';

export const FileContext = React.createContext({});

const FileProvider = ({ children }: any) => {
  // Path to application directory on user machine
  const [myPath, setMyPath] = useState('');
  // FileTree array created when applicaiton directory is 'uploaded'
  const [fileTree, setFileTree] = useState([]);
  // File clicken on in rendered FileTree to be displayed in code editor
  const [chosenFile, setChosenFile] = useState('');
  // Name of test file that will be exported
  const [testFileName, setTestFileName] = useState('');
  // Boolean to handle the toggle of rendered File tree
  const [toggleTree, setToggleTree] = useState(true);

  // HANDLERS TO UPDATE STATE ABOVE

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
      // State available for any file that imports FileProvider and uses UseContext hook if below
      value={{
        myPath,
        pathHandler,
        fileTree,
        fileTreeHandler,
        chosenFile,
        chosenFileHandler,
        toggleTree,
        handleToggleTree,
        testFileName,
        setTestFileName,
      }}
    >
      {/* children must be passed below for children componenets of provider to render */}
      {children}
    </FileContext.Provider>
  );
};

export default FileProvider;
