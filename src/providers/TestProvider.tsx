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

        assertions: {}, // TODO: Is this the best data structure ?
        actions: {0: {action: '', selector: '', text: '', key: ''}},
      },
    // nestedDescribes: [],
  });

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
  
  // ********************* ACTIONS *********************
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

  const handleActionSelector = (selector: string, actionIndex: number) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        actions: {
          ...test.nestedIts.actions,
          [actionIndex]: { ...test.nestedIts.actions[actionIndex], selector: selector },
        },
      },
    });
  };

  
  const handleActionKey = (key: string, actionIndex: number) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        actions: {
          ...test.nestedIts.actions,
          [actionIndex]: { ...test.nestedIts.actions[actionIndex], key: key },
        },
      },
    });
  };

  const handleActionText = (text: string, actionIndex: number) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        actions: {
          ...test.nestedIts.actions,
          [actionIndex]: { ...test.nestedIts.actions[actionIndex], text: text },
        },
      },
    });
  };


  const handleAssertionsChoice = (newAssert: string) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        assertions: {
          ...test.nestedIts.assertions,
            assertion: newAssert,
          },
        },
     
    });
  };

  const handleAssertionsUserInput = (newAssertInput: string) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        assertions: {
          ...test.nestedIts.assertions,

            userInput: newAssertInput,
          },
        },
    });
  };

  const handleCallbackChoice = (newAssertCB: string) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        assertions: {
          ...test.nestedIts.assertions,

            callback: newAssertCB,
          },
        },
    });
  };

  const handleSelectionChoice = (newAssertSel: string) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        assertions: {
          ...test.nestedIts.assertions,

            selector: newAssertSel,
          },
        },
    });
  };

  const handleTest = (updatedTest) => {
    setTest(updatedTest);
  };
/***************************************************************************** */
  const addAssertion = () => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        assertions: {
          assertion: '', userInput: '', selector: '', callback: '',
        },
      },
    });
  };

  const addPuppeteerAction = (index) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        actions: {
          ...test.nestedIts.actions,
          [index]: { action: '', selector: '', text: '', key: '' },
        },
      },
    });
  };

  return (
    <TestContext.Provider
      value={{
        test,
        handleTest,
        handleDBlockDescription,
        handleItBlockDescription,
        handleActions,
        handleActionSelector,
        handleActionKey,
        handleActionText,
        handleAssertionsChoice,
        handleAssertionsUserInput,
        handleCallbackChoice,
        handleSelectionChoice,
        addPuppeteerAction,
        addAssertion,
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};

export default TestProvider;
