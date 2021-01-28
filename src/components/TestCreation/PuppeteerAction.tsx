import React, { useContext, useState } from "react";
import { TestContext } from "../../providers/TestProvider";
import AssertionBlock from "./AssertionBlock";

const PuppeteerAction = (props) => {
  const { handleActions, handleActionSelector,  handleActionKey, handleActionText, handleActionOptions} = useContext(TestContext);
  const [selectAction, setSelectAction] = useState("");

  // options that the user will see and choose
  const actionsList = ["keyboard.press", "keyboard.type", "page.focus", "page.click", "page.type"]; // TODO: more actions

  // How do we allow the user to dynamically create their tests,
  // or do explicitally tell them what they can do.
  //   {getInnerText: `.$eval(${label}, (el) => el.getInnerText)`,
// getLength: `.$eval(${label}, (el) => el.getLength)`}

  const renderOptions = () => {
    return actionsList.map((action) => {
      return (
        <option key={action} value={action}>
          {action}
        </option>
      );
    });
  };

  // const actionObjects = {

  //   focus: { callback: true, selzector: false, options: false}
  //   type: { callback: true, selzector: false, options: false}
  //   buttonClick: { callback: true, selzector: false, options: false}
  //   focus: { callback: true, selzector: false, options: false}
  //   focus: { callback: true, selzector: false, options: false key: false,}
      // KeyboardEventpress: {key: true}
  // }
  // the object holding all the parameters
  const actionObjects = {
    //keyboard.press(key)// >>> takes an argument of a key that you press (ArrowLeft, ArrowUp)
    'keyboard.press' : {selector: false, key: true, text: false, options: false},
    // (text[, options]) >>> takes an argument of your input value, (Optional value of delay between key press)
    'keyboard.type' : {selector: false, key: false, text: true, options: true},
    //page.focus(selector) >>> takes arugment of ID, Class, Type, Attribute, focuses, asserting presence on DOM
    'page.focus' : {selector: true, key: false, text: false, options: false},
    //page.click(selector[, options] >>> takes argument of ID, Class, Type, Attribute, and optional arg of number of clicks
    'page.click' : {selector: true, key: false, text: false, options: true},
    //page.type(selector, text[, options]
    'page.type' : {selector: true, key: false, text: true, options: true}
    // '$eval: getLength' -> tell the user (more experienced Puppeteer user) that we will
    // be writing the callback for them
}
// ***** Local select state handler *****
  const handleActionSelect = (value) => {
    // props.index
    handleActions(value, props.index);
  };

  // ***** Global state handlers *****
  const handleSelector = (value) => {
    handleActionSelector(value, props.index)
  }
  const handleKey = (value) => {
    handleActionKey(value, props.index)
  }
  const handleText = (value) => {
    handleActionText(value, props.index)
  }
  const handleOptions = (value) => {
    handleActionOptions(value, props.index)
  }
// if (actionsObject[selectAction].text === true)

  // TODO Adjust <select> to reflect chosen option value
  return (

    // actionsObject[selectionAction].callback ? <input  callacbakc information/> 
    <div style={{ backgroundColor: "#D82802"}}>
      <h1>PuppeteerAction</h1>
      <select
        value={selectAction}
        onChange={(e) => handleActionSelect(e.target.value)}
      >
        <option value="" disabled>
          Select Puppeteer Action
        </option>
        {renderOptions()}
      </select>
      {/* determine what selectAction use chose --> dyncamilly render those inputs below*/}
      {/* Ternaries based upon selectAction's value */}
      {/*  actionsObject[selectAction].text && render the thing you want*/}
       {/*TODO create a little 'hint' button they can press?  */}
      {actionObjects[selectAction].selector &&
        <input
          placeholder="selector"
          onChange={(e) => handleSelector(e.target.value)}
        />}
      {actionObjects[selectAction].key && 
      <input 
          placeholder="key"
          onChange={(e) => handleKey(e.target.value)}
        />}
      {actionObjects[selectAction].text && 
      <input type="text" 
          placeholder="text"
          onChange={(e) => handleText(e.target.value)}
          />}
      {actionObjects[selectAction].options && 
      <input 
          placeholder="options"
          onChange={(e) => handleOptions(e.target.value)}
          />}
    </div>
  );
};

export default PuppeteerAction;
