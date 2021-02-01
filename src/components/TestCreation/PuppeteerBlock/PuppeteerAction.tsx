// REACT LIBRARIES
import React, { useContext } from 'react';
import {
  Form,
  Input,
  Label,
  Select,
  SubHeader,
} from '../../../assets/stylesheets/styled-components/Global';
// GLOBAL STATE PROVIDER
import { TestContext } from '../../../providers/TestProvider';
// STYLES
import './PuppeteerAction.scss';

const PuppeteerAction = ({ index, itIndex }: any) => {
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

  const thisAction = test.nestedIts[itIndex].actions[index];

  const renderOptions = () => actionsList.map(
    (action) => <option key={action} value={action}>{action}</option>,
  );

  // Conditionally rendered user inputs based on user selection of Puppeteer action
  const actionObjects: any = {
    // keyboard.press(key)// >>> takes an argument of a key that you press (ArrowLeft, ArrowUp)
    'page.keyboard.press': { selector: false, key: true, text: false },
    // (text[, options]) >>> takes an argument of your input value
    'page.keyboard.type': { selector: false, key: false, text: true },
    // page.focus(selector) >>> takes arg of ID, Class, Type, Attribute; focuses on a DOM element
    'page.focus': { selector: true, key: false, text: false },
    // page.click(selector[, options] >>> takes argument of ID, Class, Type, Attribute
    'page.click': { selector: true, key: false, text: false },
    // page.type(selector, text[, options] >>> takes argument 
    'page.type': { selector: true, key: false, text: true },
  };

  // ***** Local select state handler *****
  const handleActionSelect = (value: any): void => {
    handleActions(value, index, itIndex);
  };

  // ***** Global state handlers *****
  const handleSelector = (value: any): void => {
    handleActionSelector(value, index, itIndex);
  };
  const handleKey = (value: any): void => {
    handleActionKey(value, index, itIndex);
  };
  const handleText = (value: any): void => {
    handleActionText(value, index, itIndex);
  };

  const determineInputs = () => (
    <div id="inputCont">
      {actionObjects[thisAction.action].selector && (
        <Form>
          <Label>Selector:</Label>
          <Input
            placeholder="ex: h1, className, Id"
            value={thisAction.selector}
            onChange={(e: any) => handleSelector(e.target.value)}
            id="inputPA"
          />
        </Form>
      )}
      {actionObjects[thisAction.action].key && (
        <Form>
          <Label>Key:</Label>
          <Input
            placeholder="ex: backspace, uparrow"
            value={thisAction.key}
            onChange={(e: any) => handleKey(e.target.value)}
            id="inputPA"
          />
        </Form>
      )}
      {actionObjects[thisAction.action].text && (
        <Form>
          <Label>Text:</Label>
          <Input
            type="text"
            placeholder="ex: Hello world..."
            value={thisAction.text}
            onChange={(e: any) => handleText(e.target.value)}
            id="inputPA"
          />
        </Form>
      )}
    </div>
  );

  return (
    // actionsObject[selectionAction].callback ? <input  callacbakc information/>
    <div id="paCont">
      <SubHeader id="paSubHeader">Puppeteer Action</SubHeader>
      <div id="selectPA">
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
      {thisAction.action.length ? <div>{determineInputs()}</div> : null}
    </div>
  );
};

export default PuppeteerAction;
