import React, { useContext, useState } from "react";
import { TestContext } from "../../providers/TestProvider";
import PuppeteerAction from "./PuppeteerAction";
import AssertionBlock from "./AssertionBlock";

// STYLES
import "./ItBlock.scss";
import {
  Button,
  Form,
  Input,
  Label,
  SubHeader,
} from "../../assets/stylesheets/styled-components/Global";
import { ItButton } from "../../assets/stylesheets/styled-components/Buttons";

const ItBlock = (props) => {
  const {
    test,
    handleItBlockDescription,
    addPuppeteerAction,
    addAssertion,
  } = useContext(TestContext);
  // const [actionsNumber, setActionsNumber] = useState(1)
  let newAssertIndex = Object.keys(test.nestedIts.assertions).length;
  let newPuppeteerIndex = Object.keys(test.nestedIts.actions).length;

  // start with number
  // for how many numbres we iterate and render the puppeteer action componeent
  const puppeteerBlockArray = [];
  for (let key in test.nestedIts.actions) {
    puppeteerBlockArray.push(
      <PuppeteerAction key={`action-${key}`} index={key} />
    );
  }
  const assertionBlockArray = [];
  for (let key in test.nestedIts.assertions) {
    assertionBlockArray.push(
      <AssertionBlock key={`assertion-${key}`} index={key} />
    );
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
          onChange={(e) => handleItBlockDescription(e.target.value)}
        />
      </Form>
      <div id="itButtonCont">
        <ItButton
          type="button"
          onClick={() => addPuppeteerAction(newPuppeteerIndex)}
        >
          +Puppeteer Action
        </ItButton>
        <ItButton type="button" onClick={() => addAssertion(newAssertIndex)}>
          +Assertion
        </ItButton>
      </div>
      {puppeteerBlockArray}
      {assertionBlockArray}
    </div>
  );
};
// TODO: The ability to allow multiple puppeteer actions and assertions after one another
export default ItBlock;
