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
    nestedIts: { 0: {
        itDescription: '',

        assertions: {}, 
        actions: { 0: { action: '', selector: '', text: '', key: ''}},
      },
    },
  });
  
  const [URL, setURL] = useState('');

  const handleResetState = () => {
    setTest({
      dDescription: '',
      nestedIts: { 0: {
          itDescription: '',
  
          assertions: {},
          actions: { 0: { action: '', selector: '', text: '', key: ''}},
        },
      },
    });
  };
  const handleDBlockDescription = (dBlockDescription: string) => {
    setTest({ ...test, dDescription: dBlockDescription });
  };

  const handleItBlockDescription = (
    itBlockDesription: string,
    itIndex: number,
  ) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        [itIndex]: {
          ...test.nestedIts[itIndex],
          itDescription: itBlockDesription,
        }
        
      },
    });
  };
  
  // ********************* ACTIONS *********************
  const handleActions = (newAction: string, actionIndex: number, itIndex: number) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        [itIndex]: {
          ...test.nestedIts[itIndex],
          actions: {
            ...test.nestedIts[itIndex].actions,
            [actionIndex]: { action: newAction, selector: '', text: '', key: '' },
          },
        },
      },
    });
  };

  const handleActionSelector = (newSelector: string, actionIndex: number, itIndex: number) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        [itIndex]: {
          ...test.nestedIts[itIndex],
          actions: {
            ...test.nestedIts[itIndex].actions,
            [actionIndex]: { ...test.nestedIts[itIndex].actions[actionIndex], selector: newSelector },
          },
        },
      },
    });
  };

  
  const handleActionKey = (newKey: string, actionIndex: number, itIndex: number) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        [itIndex]: {
          ...test.nestedIts[itIndex],
          actions: {
            ...test.nestedIts[itIndex].actions,
            [actionIndex]: { ...test.nestedIts[itIndex].actions[actionIndex], key: newKey },
          },
        },
      },
    });
  };

  const handleActionText = (newText: string, actionIndex: number, itIndex: number) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        [itIndex]: {
          ...test.nestedIts[itIndex],
          actions: {
            ...test.nestedIts[itIndex].actions,
            [actionIndex]: { ...test.nestedIts[itIndex].actions[actionIndex], text: newText },
          },
        },
      },
    });
  };


  const handleAssertionsChoice = (newAssert: string, itIndex: number) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        [itIndex]: {
          ...test.nestedIts[itIndex],
          assertions: {
            ...test.nestedIts[itIndex].assertions,
            assertion: newAssert
          },
        },
      },
    });
  };

  const handleAssertionsUserInput = (newAssertInput: string, itIndex: number) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        [itIndex]: {
          ...test.nestedIts[itIndex],
          assertions: {
            ...test.nestedIts[itIndex].assertions,
            userInput: newAssertInput,
          },
        },
      },
    });
  };

  const handleCallbackChoice = (newAssertCB: string, itIndex: number) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        [itIndex]: {
          ...test.nestedIts[itIndex],
          assertions: {
            ...test.nestedIts[itIndex].assertions,
            callback: newAssertCB,
          },
        },
      },
    });
  };

  const handleSelectionChoice = (newAssertSel: string, itIndex: number) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        [itIndex]: {
          ...test.nestedIts[itIndex],
          assertions: {
            ...test.nestedIts[itIndex].assertions,
              selector: newAssertSel,
          },
        },
      },
    });
  };

  const handleTest = (updatedTest: any) => {
    setTest(updatedTest);
  };
/***************************************************************************** */
  const addAssertion = (itIndex: number) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        [itIndex]: {
          ...test.nestedIts[itIndex],
          assertions: {
            assertion: '', userInput: '', selector: '', callback: '',
          },
        },
      },
    });
  };

  const addPuppeteerAction = (index: number, itIndex: number) => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        [itIndex]: {
          ...test.nestedIts[itIndex],
         actions: {
           ...test.nestedIts[itIndex].actions,
            [index]: { action: '', selector: '', text: '', key: ''}   
        },
      },
    },
  });
};

const addItBlock = (index: number) => {
  setTest({
    ...test,
    nestedIts: {
      ...test.nestedIts,
      [index]: {
      itDescription: '',
      assertions: {}, 
      actions: { 0: { action: '', selector: '', text: '', key: '' } },
      }
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
        addItBlock,
        handleResetState,
        URL,
        setURL,
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};

export default TestProvider;
