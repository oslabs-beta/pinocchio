import React, { useContext, useState } from "react";
import {
  Form,
  Input,
  Label,
  Select,
  SubHeader,
} from "../../../assets/stylesheets/styled-components/Global";
import { TestContext } from "../../../providers/TestProvider";
import AssertionBlock from "../AssertionBlock/AssertionBlock";

// STYLES
import "./PuppeteerAction.scss";

const PuppeteerAction = (props) => {
  const {
    test,
    handleActions,
    handleActionSelector,
    handleActionKey,
    handleActionText,
    handleActionOptions,
  } = useContext(TestContext);
  const [selectAction, setSelectAction] = useState("");

  // options that the user will see and choose
  const actionsList = [
    "page.keyboard.press",
    "page.keyboard.type",
    "page.focus",
    "page.click",
    "page.type",
  ]; // TODO: more actions

  const renderOptions = () => {
    return actionsList.map((action) => {
      return (
        <option key={action} value={action}>
          {action}
        </option>
      );
    });
  };

  // the object holding all the parameters
  const actionObjects = {
    //keyboard.press(key)// >>> takes an argument of a key that you press (ArrowLeft, ArrowUp)
    "page.keyboard.press": { selector: false, key: true, text: false },
    // (text[, options]) >>> takes an argument of your input value, (Optional value of delay between key press)
    "page.keyboard.type": { selector: false, key: false, text: true },
    //page.focus(selector) >>> takes arugment of ID, Class, Type, Attribute, focuses, asserting presence on DOM
    "page.focus": { selector: true, key: false, text: false },
    //page.click(selector[, options] >>> takes argument of ID, Class, Type, Attribute, and optional arg of number of clicks
    "page.click": { selector: true, key: false, text: false },
    //page.type(selector, text[, options]
    "page.type": { selector: true, key: false, text: true },
    // '$eval: getLength' -> tell the user (more experienced Puppeteer user) that we will
    // be writing the callback for them
  };
  // ***** Local select state handler *****
  const handleActionSelect = (value) => {
    setSelectAction(value);
    handleActions(value, props.index, props.itIndex);
  };

  // ***** Global state handlers *****
  const handleSelector = (value) => {
    handleActionSelector(value, props.index, props.itIndex);
  };
  const handleKey = (value) => {
    handleActionKey(value, props.index, props.itIndex);
  };
  const handleText = (value) => {
    handleActionText(value, props.index, props.itIndex);
  };

  const determineInputs = () => (
    <div id="inputCont">
      {actionObjects[test.nestedIts[props.itIndex].actions[props.index].action].selector && (
        <Form>
          <Label>Selector:</Label>
          <Input
            placeholder="ex: h1, className, Id"
            value={test.nestedIts[props.itIndex].actions[props.index].selector}
            onChange={(e) => handleSelector(e.target.value)}
            id="inputPA"
          />
        </Form>
      )}
      {actionObjects[test.nestedIts[props.itIndex].actions[props.index].action].key && (
        <Form>
          <Label>Key:</Label>
          <Input
            placeholder="ex: backspace, uparrow"
            value={test.nestedIts[props.itIndex].actions[props.index].key}
            onChange={(e) => handleKey(e.target.value)}
            id="inputPA"
          />
        </Form>
      )}
      {actionObjects[test.nestedIts[props.itIndex].actions[props.index].action].text && (
        <Form>
          <Label>Text:</Label>
          <Input
            type="text"
            placeholder="ex: Hello world..."
            value={test.nestedIts[props.itIndex].actions[props.index].text}
            onChange={(e) => handleText(e.target.value)}
            id="inputPA"
          />
        </Form>
      )}
    </div>
  );

  // TODO Adjust <select> to reflect chosen option value
  return (
    // actionsObject[selectionAction].callback ? <input  callacbakc information/>
    <div id="paCont">
      <SubHeader id="paSubHeader">Puppeteer Action</SubHeader>
      <div id="selectPA">
        <Select
          value={test.nestedIts[props.itIndex].actions[props.index].action}
          onChange={(e) => handleActionSelect(e.target.value)}
        >
          <option value="" disabled>
            Select Puppeteer Action
          </option>
          {renderOptions()}
        </Select>
      </div>
      {test.nestedIts[props.itIndex].actions[props.index].action.length ? <div>{determineInputs()}</div> : null}
    </div>
  );
};

export default PuppeteerAction;
