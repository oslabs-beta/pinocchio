import React, { useState } from 'react';
import { 
  describeInterface,
  itInterface,
  puppeteerActionInterface,
  assertionInterface
} from '../utils/testTypes';
export const TestContext = React.createContext();

const TestProvider = (props) => {
  const [test, setTest] = useState({
    0:{
    description: '',
    nestedIts: [{
      description: '',
      assertions: [],
      actions: [],
  }],
  nestedDescribes: [],
}})

  const handleTest = (updatedTest: Array<describeInterface>) => {
    setTest(updatedTest);
  };

  return (
    <TestContext.Provider value={{ test, handleTest }}>{props.children}</TestContext.Provider>
  );
};

export default TestProvider;
