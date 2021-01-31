import React, { useContext, useEffect, useRef, useState } from "react";
import { TestContext } from "../../../providers/TestProvider";
import PuppeteerAction from "../PuppeteerBlock/PuppeteerAction";
import AssertionBlock from "../AssertionBlock/AssertionBlock";
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

  const newPuppeteerIndex = Object.keys(test.nestedIts[props.itIndex].actions)
    .length;

  // start with number
  // for how many numbres we iterate and render the puppeteer action componeent
  const puppeteerBlockArray = [];
  for (let key in test.nestedIts[props.itIndex].actions) {
    puppeteerBlockArray.push(
      <PuppeteerAction
        key={`action-${key}`}
        index={key}
        itIndex={props.itIndex}
      />
    );
  }

  let assertionButton;

  if (!Object.keys(test.nestedIts[props.itIndex].assertions).length) {
    assertionButton = (
      <ItButton type="button" id='itButton' onClick={() => addAssertion(props.itIndex)}>
        +Assertion
      </ItButton>
    );
  }
  return (
    <div id="itCont">
      <SubHeader>It</SubHeader>
      <Form id='itForm'>
        <Label>It:</Label>
        <Input
          id="itInput"
          type="text"
          placeholder="ex: clicks the button..."
          value={test.nestedIts[props.itIndex].itDescription}
          onChange={(e) => handleItBlockDescription(e.target.value, props.itIndex)}
        />
      </Form>
      {puppeteerBlockArray}
      <div id="itButtonCont">
        <ItButton
          type="button"
          id='itButton'
          onClick={() => addPuppeteerAction(newPuppeteerIndex, props.itIndex)}
        >
          +Puppeteer Action
        </ItButton>
        {assertionButton}
      </div>
      {Object.keys(test.nestedIts[props.itIndex].assertions).length ? (
        <AssertionBlock itIndex={props.itIndex} />
      ) : null}
    </div>
  );
};
// TODO: The ability to allow multiple puppeteer actions and assertions after one another
export default ItBlock;
