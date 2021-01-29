import React, { useContext, useEffect, useRef, useState } from "react";
import { TestContext } from "../../../providers/TestProvider";
import PuppeteerAction from "../PuppeteerBlock/PuppeteerAction";
import AssertionBlock from '../AssertionBlock/AssertionBlock';
// STYLES
import "./ItBlock.scss";
import {
  Button,
  Form,
  Input,
  Label,
  SubHeader,
} from "../../../assets/stylesheets/styled-components/Global";
import { ItButton } from "../../../assets/stylesheets/styled-components/Buttons";

const ItBlock = (props: any) => {
  const {
    test,
    handleItBlockDescription,
    addPuppeteerAction,
    addAssertion,
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
    assertionButton = <ItButton type="button" onClick={() => addAssertion(props.itIndex)}>+Assertion</ItButton>;
  }
  return (
    <div id="itCont">
      <SubHeader>It Block</SubHeader>
      <Form>
        <Label>It:</Label>
        <Input
          id="itInput"
          type="text"
          placeholder="ex: clicks the button..."
          value={test.nestedIts.itDescription}
          onChange={(e) => handleItBlockDescription(e.target.value, props.itIndex)}
        />
      </Form>
      <div id="itButtonCont">
        <ItButton
          type="button"
          onClick={() => addPuppeteerAction(newPuppeteerIndex, props.itIndex)}
        >
          +Puppeteer Action
        </ItButton>
      {assertionButton}
      </div>
      {puppeteerBlockArray}
      {assertionPresent ? <AssertionBlock itIndex={props.itIndex} /> : null}
    </div>
  );
};
// TODO: The ability to allow multiple puppeteer actions and assertions after one another
export default ItBlock;
