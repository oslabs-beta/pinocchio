/* eslint-disable-next-line no-use-before-define */
import React, { useState } from 'react';

export const TestContext = React.createContext({});

const TestProvider = ({ children }: any) => {
  // declaration of the type of the initial state of test object
  const initialState: { [key: string]: any, [key: number]: any } = {
    dDescription: '',
    nestedIts: {
      0: {
        itDescription: '',
        actions: {
          0: {
            action: '',
            selector: '',
            text: '',
            key: '',
          },
        },
        assertions: {},
      },
    },
  };
  // test object that holds necessary info to generate test file
  const [test, setTest] = useState(initialState);
  // URL where the uploaded application will be hosted on
  const [URL, setURL] = useState('');

  const handleTest = (updatedTest: any): void => {
    setTest(updatedTest);
  };

  // Reset test object to initial state
  const handleResetState = (): void => {
    setTest({
      dDescription: '',
      nestedIts: {
        0: {
          itDescription: '',
          assertions: {},
          actions: {
            0: {
              action: '', selector: '', text: '', key: '',
            },
          },
        },
      },
    });
  };
  const handleDBlockDescription = (dBlockDescription: string): void => {
    setTest({ ...test, dDescription: dBlockDescription });
  };

  // ********************* ITS *********************
  const addItBlock = (index: number): void => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        [index]: {
          itDescription: '',
          assertions: {},
          actions: {
            0: {
              action: '', selector: '', text: '', key: '',
            },
          },
        },
      },
    });
  };

  const handleItBlockDescription = (
    itBlockDesription: string,
    itIndex: number,
  ): void => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        [itIndex]: {
          ...test.nestedIts[itIndex],
          itDescription: itBlockDesription,
        },
      },
    });
  };

  // ********************* ACTIONS *********************
  const addPuppeteerAction = (index: number, itIndex: number): void => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        [itIndex]: {
          ...test.nestedIts[itIndex],
          actions: {
            ...test.nestedIts[itIndex].actions,
            [index]: {
              action: '',
              selector: '',
              text: '',
              key: '',
            },
          },
        },
      },
    });
  };

  const handleActions = (newAction: string, actionIndex: number, itIndex: number): void => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        [itIndex]: {
          ...test.nestedIts[itIndex],
          actions: {
            ...test.nestedIts[itIndex].actions,
            [actionIndex]: {
              action: newAction,
              selector: '',
              text: '',
              key: '',
            },
          },
        },
      },
    });
  };

  // eslint-disable-next-line max-len
  const handleActionSelector = (newSelector: string, actionIndex: number, itIndex: number): void => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        [itIndex]: {
          ...test.nestedIts[itIndex],
          actions: {
            ...test.nestedIts[itIndex].actions,
            [actionIndex]: {
              ...test.nestedIts[itIndex].actions[actionIndex],
              selector: newSelector,
            },
          },
        },
      },
    });
  };

  const handleActionKey = (newKey: string, actionIndex: number, itIndex: number): void => {
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

  const handleActionText = (newText: string, actionIndex: number, itIndex: number): void => {
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

  // ********************* ASSERTIONS *********************
  const addAssertion = (itIndex: number): void => {
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

  const handleAssertionsChoice = (newAssert: string, itIndex: number): void => {
    setTest({
      ...test,
      nestedIts: {
        ...test.nestedIts,
        [itIndex]: {
          ...test.nestedIts[itIndex],
          assertions: {
            ...test.nestedIts[itIndex].assertions,
            assertion: newAssert,
          },
        },
      },
    });
  };

  const handleAssertionsUserInput = (newAssertInput: string, itIndex: number): void => {
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

  const handleCallbackChoice = (newAssertCB: string, itIndex: number): void => {
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

  const handleSelectionChoice = (newAssertSel: string, itIndex: number): void => {
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

  return (
    <TestContext.Provider
      // State available for any file that imports FileProvider and uses UseContext hook if below
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
      {/* children must be passed below for children componenets of provider to render */}
      {children}
    </TestContext.Provider>
  );
};

export default TestProvider;
