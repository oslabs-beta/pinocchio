import React, { useState } from 'react';

export const TestContext = React.createContext();

const TestProvider = (props) => {
  return(
    <TestContext.Provider value={{}}>{props.children}</TestContext.Provider>
  )
};

export default TestProvider;
