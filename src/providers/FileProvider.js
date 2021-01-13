import React, { useState } from 'react'

export const FileContext = React.createContext();

// in case of class components
// export const FileConsumer = FileContext.Consumer;

const FileProvider = (props) => {
  // state hooks
  const [myPath, setMyPath] = useState('start')


  // lifecycle methods --> useEffect

  // any other functions/handlers we need to interact with our state
  const pathHandler = (pathValue) => {
    console.log('hitting provider handler');
    setMyPath(pathValue);
  }

  return (
    <FileContext.Provider value={{ myPath, pathHandler }}>
      {props.children}
    </FileContext.Provider>)
}

export default FileProvider;