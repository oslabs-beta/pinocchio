import React, { useState } from "react";

export const FileContext = React.createContext(null); // ! Throwing an error because of null

const FileProvider = ({ children }) => {
  const [myPath, setMyPath] = useState("");
  const [fileTree, setFileTree] = useState([]);
  const [chosenFile, setChosenFile] = useState("");
  const [testFileName, setTestFileName] = useState('');
  const [toggleTree, setToggleTree] = useState(true);

  // lifecycle methods --> useEffect

  // any other functions/handlers we need to interact with our state
  const pathHandler = (pathValue: string) => {
    // eslint-disable-next-line no-console
    console.log("hitting provider handler");
    setMyPath(pathValue);
    // TODO: redirect logic here
  };
  const fileTreeHandler = (tree: any) => {
    console.log("hitting tree handler");
    setFileTree(tree);
  };

  const chosenFileHandler = (chosen: string) => {
    console.log("hitting chosen handler");
    setChosenFile(chosen);
  };

  const handleToggleTree = () => {
    setToggleTree(!toggleTree)
  }

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
