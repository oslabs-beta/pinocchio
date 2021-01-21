import React, { useState } from 'react';
import {
  describeInterface,
  itInterface,
  puppeteerActionInterface,
  assertionInterface,
} from '../utils/testTypes';

export const TestContext = React.createContext(null);

const TestProvider = (props) => {
  // conversation to have:
  // determine if assertions, actions, pretty much everything
  // if it should be an object or array.
  // starting off, array could be more simple, but the further we get,
  // what if a user wants to delete/cancel one of these blocks?
  // we would have to re evaluate all of the indexes
  // You don't have to necessarily do that with an object, you only refer to the key.
  // But if we do objects, it can get a little weird with how we create those objects initially
  const [test, setTest] = useState({
    dDescription: '',
    nestedIts: {
        itDescription: '',

        assertions: { 0: { assertion: '', userInput: '' } }, // TODO: Is this the best data structure ?
        actions: {0: {action: '', htmlNode: ''}},
      },
    // nestedDescribes: [],
  });
  const [actionArrayIndex, setActionArrayIndex] = useState(
    test.nestedIts.actions.length
  );

  const handleDBlockDescription = (dBlockDescription: string) => {
    setTest({ ...test, dDescription: dBlockDescription });
  };

  const handleItBlockDescription = (
    itBlockDesription: string,
    nestedItIndex: number
  ) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
          itDescription: itBlockDesription,
        
      },
    });
  };

  const handleActions = (newAction: string, actionIndex: number) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        actions: {
          ...test.nestedIts.actions,
          [actionIndex]: { ...test.nestedIts.actions[actionIndex], action: newAction },
        },
      },
    });
  };

  const handleActionsNode = (newNode: string, actionIndex: number) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        actions: {
          ...test.nestedIts.actions,
          [actionIndex]: { ...test.nestedIts.actions[actionIndex], htmlNode: newNode },
        },
      },
    });
  };

  const handleAssertionsChoice = (newAss: string, index: number) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        assertions: {
          ...test.nestedIts.assertions,
          [index]: { ...test.nestedIts.assertions[index], assertion: newAss },
        },
      },
    });
  };

  const handleAssertionsUserInput = (newAssertInput: string, index: number) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        assertions: {
          ...test.nestedIts.assertions,
          [index]: {
            ...test.nestedIts.assertions[index],
            userInput: newAssertInput,
          },
        },
      },
    });
  };

  const handleTest = (updatedTest) => {
    setTest(updatedTest);
  };

  return (
    <TestContext.Provider
      value={{
        test,
        handleTest,
        handleDBlockDescription,
        handleItBlockDescription,
        handleActions,
        handleActionsNode,
        actionArrayIndex,
        handleAssertionsChoice,
        handleAssertionsUserInput,
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};

export default TestProvider;
