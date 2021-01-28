import React, { useContext, useState } from "react";
import { TestContext } from "../../providers/TestProvider";
import PuppeteerAction from "./PuppeteerAction";
import AssertionBlock from './AssertionBlock';

const ItBlock = (props) => {
  const { test, handleItBlockDescription, addPuppeteerAction, addAssertion } = useContext(TestContext);
  // const [actionsNumber, setActionsNumber] = useState(1)
  let newAssertIndex = Object.keys(test.nestedIts.assertions).length;
  let newPuppeteerIndex = Object.keys(test.nestedIts.actions).length;
  
  // start with number 
  // for how many numbres we iterate and render the puppeteer action componeent
  const puppeteerBlockArray = [];
  for (let key in test.nestedIts.actions) {
      puppeteerBlockArray.push(
        <PuppeteerAction
        key={`action-${key}`} 
        index={key} 
      />)
  }
  const assertionBlockArray = [];
  for (let key in test.nestedIts.assertions) {
      assertionBlockArray.push(
          <AssertionBlock 
            key={`assertion-${key}`} 
            index={key} 
          />)
  }
  return (
    <div style={{backgroundColor: '#099CD7'}}>
      <h1>It Block</h1>
      <label> It Block </label>
      <input
        type="text"
        placeholder="The specific test functionality"
        value={test.nestedIts.itDescription}
        onChange={(e) => handleItBlockDescription(e.target.value)}
      />
      <button type="button" onClick={() => addPuppeteerAction(newPuppeteerIndex)}>
        +Puppeteer Action
      </button>
      <button type="button" onClick={() => addAssertion(newAssertIndex)}>+Assertion</button>
      {puppeteerBlockArray}
      {assertionBlockArray}
    </div>
  );
};
// TODO: The ability to allow multiple puppeteer actions and assertions after one another
export default ItBlock;
