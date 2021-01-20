import React, { useState } from "react";
import {
  describeInterface,
  itInterface,
  puppeteerActionInterface,
  assertionInterface,
} from "../utils/testTypes";

export const TestContext = React.createContext(null);

const TestProvider = (props) => {
  const [test, setTest] = useState({
    dDescription: "",
    nestedIts: 
      {
        itDescription: "",
        assertions: [],
        actions: [],
      },
    // nestedDescribes: [],
  });
  const [actionArrayIndex, setActionArrayIndex] = useState(test.nestedIts.actions.length)

  const handleDBlockDescription = (dBlockDescription: string) => {
    setTest({...test, dDescription: dBlockDescription })
  }

  const handleItBlockDescription = (itBlockDesription: string) => {
    setTest({
      ...test,
      nestedIts: { ...test.nestedIts, itDescription: itBlockDesription },
    });
  };

  const handleActions = (newAction: string) => {
    setTest({
      ...test,
      // add a spread of the whole actions array if we want to add more
      nestedIts: {...test.nestedIts, actions: [newAction]}
    })
  }

  const handleTest = (updatedTest) => {
    setTest(updatedTest);
  };

  return (
    <TestContext.Provider value={{
      test,
      handleTest,
      handleDBlockDescription, 
      handleItBlockDescription,
      handleActions,
      actionArrayIndex
    }}>
      {props.children}
    </TestContext.Provider>
  );
};

export default TestProvider;
