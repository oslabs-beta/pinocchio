// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';

export const TestContext = React.createContext(null);

const TestProvider = ({ children }: any) => {
  const initialState: {[key: string]: any, [key: number]: any} = {
    dDescription: '',
    nestedIts: {
      0: {
        itDescription: '',
        assertions: {}, // ? can this be moved below actions?
        actions: {
          0: {
            action: '',
            selector: '',
            text: '',
            key: '',
          },
        },
      },
    },
  };
  const [test, setTest] = useState(initialState);

  const [URL, setURL] = useState('');

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

  const handleTest = (updatedTest: any): void => {
    setTest(updatedTest);
  };
  // ***************************************************************************** //
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
      {children}
    </TestContext.Provider>
  );
};

export default TestProvider;
