import React, { useState } from 'react';

// in case of class components
// export const FileConsumer = FileContext.Consumer;

export const FileContext = React.createContext(null);

const FileProvider = (props) => {
  // state hooks
  // state === {myPath: 'start'}
  const [myPath, setMyPath] = useState('start');
  const [fileTree, setFileTree] = useState([]);
  // lifecycle methods --> useEffect

  // any other functions/handlers we need to interact with our state
  const pathHandler = (pathValue: string) => {
    console.log('hitting provider handler');
    setMyPath(pathValue);
    // redirect logic here
  };
  const fileTreeHandler = (tree: any) => {
    console.log('hitting tree handler');
    setFileTree(tree);
  };

  return (
    <FileContext.Provider value={{ myPath, pathHandler, fileTreeHandler }}>
      {props.children}
    </FileContext.Provider>
  );
};

export default FileProvider;
