import React, { useContext, useState } from "react";
import { TestContext } from "../../providers/TestProvider";
import PuppeteerAction from "./PuppeteerAction";
import AssertionBlock from './AssertionBlock';

const ItBlock = (props) => {
  const { test, handleItBlockDescription, actionArrayIndex, addPuppeteerAction } = useContext(TestContext);
  // const [actionsNumber, setActionsNumber] = useState(1)


  // start with number 
  // for how many numbres we iterate and render the puppeteer action componeent
  return (
    <div style={{border: 'solid 3px blue'}}>
      <h1>It Block</h1>
      <label> It Block </label>
      <input
        type="text"
        placeholder="The specific test functionality"
        value={test.nestedIts.itDescription}
        onChange={(e) => handleItBlockDescription(e.target.value)}
      />
      <button type="button" onClick={() => addPuppeteerAction()}>
        +Puppeteer Action
      </button>
      <PuppeteerAction index={0} />
      <button type="button">+Assertion</button>
      <AssertionBlock index = {0}/>
    </div>
  );
};

export default ItBlock;
