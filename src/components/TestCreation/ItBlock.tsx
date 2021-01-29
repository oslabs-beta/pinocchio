import React, { useContext, useEffect, useRef, useState } from "react";
import { TestContext } from "../../providers/TestProvider";
import PuppeteerAction from "./PuppeteerAction";
import AssertionBlock from './AssertionBlock';

const ItBlock = (props: any) => {
  const {
    test,
    handleItBlockDescription,
    addPuppeteerAction,
    addAssertion 
  } = useContext(TestContext);
  const [assertionPresent, setAssertionPresent] = useState(false);
  const newPuppeteerIndex = Object.keys(test.nestedIts[props.itIndex].actions).length;
  // start with number
  // for how many numbres we iterate and render the puppeteer action componeent
  const puppeteerBlockArray = [];
  for (let key in test.nestedIts[props.itIndex].actions) {
      puppeteerBlockArray.push(
        <PuppeteerAction
        key={`action-${key}`} 
        index={key}
        itIndex={props.itIndex} 
      />)
  }
  const didMountRef = useRef(false);
  let assertionButton;
  
  useEffect(() => {
    if (didMountRef.current) setAssertionPresent(true);
    else didMountRef.current = true;
  }, [test.nestedIts[props.itIndex].assertions]);

  if (!assertionPresent) {
    assertionButton = <button type="button" onClick={() => addAssertion(props.itIndex)}>+Assertion</button>;
  }
  return (
    <div style={{backgroundColor: '#099CD7'}}>
      <h1>It Block</h1>
      <label> It Block </label>
      <input
        type="text"
        placeholder="The specific test functionality"
        value={test.nestedIts[props.itIndex].itDescription}
        onChange={(e) => handleItBlockDescription(e.target.value, props.itIndex)}
      />
      <button type="button" onClick={() => addPuppeteerAction(newPuppeteerIndex, props.itIndex)}>
        +Puppeteer Action
      </button>
      {assertionButton}
      {puppeteerBlockArray}
      {assertionPresent ? <AssertionBlock itIndex={props.itIndex} /> : null}
    </div>
  );
};
// TODO: The ability to allow multiple puppeteer actions and assertions after one another
export default ItBlock;
