/* eslint-disable import/no-unresolved */ // ! Be careful
// REACT LIBRARIES
// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react';
// GLOBAL STATE PROVIDERS
import { TestContext } from '../../../providers/TestProvider';
// REACT COMPONENTS
import PuppeteerAction from '../PuppeteerBlock/PuppeteerAction';
import AssertionBlock from '../AssertionBlock/AssertionBlock';
// STYLES
import './ItBlock.scss';
import {
  Form,
  Input,
  Label,
  SubHeader,
} from '../../../assets/stylesheets/styled-components/Global';
import { ItButton } from '../../../assets/stylesheets/styled-components/Buttons';

const ItBlock = ({ itIndex }: any) => {
  // GLOBAL STATE
  const {
    test,
    handleItBlockDescription,
    addPuppeteerAction,
    addAssertion,
  }: any = useContext(TestContext);
  // declare a label for *this* it-block in state
  const thisIt = test.nestedIts[itIndex];
  // label for next puppeteer action index
  const newPuppeteerIndex = Object.keys(thisIt.actions).length;

  // Iterate through it-block's puppeteer actions and create PuppteerAction components for each
  // Each component will have its own index and this it-block's index to reference to state
  const puppeteerBlockArray: Array<any> = [];
  Object.keys(thisIt.actions).forEach((key: string) => puppeteerBlockArray.push(<PuppeteerAction key={`action-${key}`} index={key} itIndex={itIndex} />));

  // button label; to be conditionally rendered if no assertions exist in this it-block in state
  let assertionButton;
  if (!Object.keys(thisIt.assertions).length) {
    assertionButton = (
      <ItButton type="button" id="itButton" onClick={() => addAssertion(itIndex)}>
        +Assertion
      </ItButton>
    );
  }

  return (
    <div id="itCont">
      <SubHeader>It</SubHeader>
      <Form id="itForm">
        <Label>It:</Label>
        {/* update it-block's description property based off user input */}
        <Input
          id="itInput"
          type="text"
          placeholder="ex: clicks the button..."
          value={thisIt.itDescription}
          onChange={(e: any) => handleItBlockDescription(e.target.value, itIndex)}
        />
      </Form>
      {/* render puppeteer action blocks */}
      {puppeteerBlockArray}
      <div id="itButtonCont">
        <ItButton
          type="button"
          id="itButton"
          onClick={() => addPuppeteerAction(newPuppeteerIndex, itIndex)}
        >
          +Puppeteer Action
        </ItButton>
        {assertionButton}
      </div>
      {/* conditionally renders assertion block if it exists in state */}
      {Object.keys(thisIt.assertions).length ? (
        <AssertionBlock itIndex={itIndex} />
      ) : null}
    </div>
  );
};

export default ItBlock;
