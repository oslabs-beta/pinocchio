// REACT LIBRARIES
/* eslint-disable-next-line no-use-before-define */
import React, { useContext } from 'react';
import {
  Form,
  Input,
  Label,
  Select,
  SubHeader,
} from '../../../assets/stylesheets/styled-components/Global';
// GLOBAL STATE PROVIDER
/* eslint-disable-next-line import/no-unresolved */ // ! Be careful
import { TestContext } from '../../../providers/TestProvider';
// STYLES
import './PuppeteerAction.scss';

const PuppeteerAction = ({ index, itIndex }: any) => {
  // GLOBAL STATE
  const {
    test,
    handleActions,
    handleActionSelector,
    handleActionKey,
    handleActionText,
  }: any = useContext(TestContext);

  // Available Puppeteer actions
  const actionsList = [
    'page.keyboard.press',
    'page.keyboard.type',
    'page.focus',
    'page.click',
    'page.type',
  ];

  // Declare a label for *this* specific action in state
  const thisAction = test.nestedIts[itIndex].actions[index];

  // render action choices as option components
  const renderOptions = () => actionsList.map(
    (action) => <option key={action} value={action}>{action}</option>,
  );

  // Conditionally rendered user inputs based on user selection of Puppeteer action
  const actionInputs: any = {
    // page.keyboard.press(key)// >>> takes an argument of a key that you press (ArrowLeft, ArrowUp)
    'page.keyboard.press': { selector: false, key: true, text: false },
    // page.keyboard.type(text[, options]) >>> takes an argument of your input value
    'page.keyboard.type': { selector: false, key: false, text: true },
    // page.focus(selector) >>> takes arg of ID, Class, Type, Attribute; focuses on a DOM element
    'page.focus': { selector: true, key: false, text: false },
    // page.click(selector[, options] >>> takes argument of ID, Class, Type, Attribute
    'page.click': { selector: true, key: false, text: false },
    // page.type(selector, text[, options] >>> takes argument of user input
    'page.type': { selector: true, key: false, text: true },
  };

  // ***** Local select state handler *****
  const handleActionSelect = (value: any): void => {
    handleActions(value, index, itIndex);
  };

  const determineInputs = () => (
    <div id="inputCont">
      {/* conditionally renders certain inputs if they exist on 'actionInputs' */}
      {actionInputs[thisAction.action].selector && (
        <Form>
          <Label>Selector:</Label>
          {/* update actions selector property based off user input */}
          <Input
            placeholder="ex: h1, className, Id"
            value={thisAction.selector}
            onChange={(e: any) => handleActionSelector(e.target.value, index, itIndex)}
            id="inputPA"
          />
        </Form>
      )}
      {actionInputs[thisAction.action].key && (
        <Form>
          <Label>Key:</Label>
          {/* update actions key press property based off user input */}
          <Input
            placeholder="ex: backspace, uparrow"
            value={thisAction.key}
            onChange={(e: any) => handleActionKey(e.target.value, index, itIndex)}
            id="inputPA"
          />
        </Form>
      )}
      {actionInputs[thisAction.action].text && (
        <Form>
          <Label>Text:</Label>
          {/* update actions text property based off user input */}
          <Input
            type="text"
            placeholder="ex: Hello world..."
            value={thisAction.text}
            onChange={(e: any) => handleActionText(e.target.value, index, itIndex)}
            id="inputPA"
          />
        </Form>
      )}
    </div>
  );

  return (
    <div id="paCont">
      <SubHeader id="paSubHeader">Puppeteer Action</SubHeader>
      <div id="selectPA">
        {/* update action 'action' property based off user choice */}
        <Select
          value={thisAction.action}
          onChange={(e: any) => handleActionSelect(e.target.value)}
        >
          <option value="" disabled>
            Select Puppeteer Action
          </option>
          {renderOptions()}
        </Select>
      </div>
      {/* conditionally render puppeteer action blocks if they exist in state */}
      {thisAction.action.length ? <div>{determineInputs()}</div> : null}
    </div>
  );
};

export default PuppeteerAction;
