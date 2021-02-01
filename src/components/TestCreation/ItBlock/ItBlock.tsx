// REACT LIBRARIES
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
  const {
    test,
    handleItBlockDescription,
    addPuppeteerAction,
    addAssertion,
  }: any = useContext(TestContext);
  const thisIt = test.nestedIts[itIndex];
  const newPuppeteerIndex = Object.keys(thisIt.actions).length;

  // start with number
  // for how many numbres we iterate and render the puppeteer action componeent
  const puppeteerBlockArray: Array<any> = [];
  Object.keys(thisIt.actions).forEach((key: string) => puppeteerBlockArray.push(<PuppeteerAction key={`action-${key}`} index={key} itIndex={itIndex} />));

  // for (let key in test.nestedIts[itIndex].actions) {
  //   puppeteerBlockArray.push(
  //     <PuppeteerAction
  //       key={`action-${key}`}
  //       index={key}
  //       itIndex={itIndex}
  //     />
  //   );
  // }

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
        <Input
          id="itInput"
          type="text"
          placeholder="ex: clicks the button..."
          value={thisIt.itDescription}
          onChange={(e: any) => handleItBlockDescription(e.target.value, itIndex)}
        />
      </Form>
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
      {Object.keys(thisIt.assertions).length ? (
        <AssertionBlock itIndex={itIndex} />
      ) : null}
    </div>
  );
};

export default ItBlock;
