/* eslint-disable import/no-unresolved */ // ! Be careful
// REACT LIBRARIES
// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react';
// GLOBAL STATE PROVIDERS
import { TestContext } from '../../../providers/TestProvider';
// STYLES
import {
  Form,
  Input,
  Label,
  Select,
  SubHeader,
} from '../../../assets/stylesheets/styled-components/Global';
import './AssertionBlock.scss';

const AssertionBlock = ({ itIndex }: any) => {
  // GLOBAL STATE
  const {
    handleAssertionsChoice,
    handleAssertionsUserInput,
    handleCallbackChoice,
    handleSelectionChoice,
    test,
  }: any = useContext(TestContext);

  // declare a label for *this* assertion in state
  const thisAssertion = test.nestedIts[itIndex].assertions;

  // mocha chai assertion choices
  const assertionArrays: Array<string> = ['to.be.equal', 'to.not.equal'];

  // $eval puppeteer action callback choices
  const evalCallbacks: Array<string> = ['getValue', 'getLength', 'getInnerText'];

  // render callback choices as option components
  const renderCallbackOptions = () => evalCallbacks.map(
    (callback) => <option key={callback} value={callback}>{callback}</option>,
  );

  // render assertion choices as option components
  const renderAssertionOptions = () => assertionArrays.map(
    (assert) => <option key={assert} value={assert}>{assert}</option>,
  );

  return (
    <div id="assertCont">
      <SubHeader>Assertion Block</SubHeader>
      <div id="formCont">
        <section id="selectAssertCont">
          <Form id="assertForm">
            {/* The selector and callback inputs are actually for puppeteer's $eval method.
            The assumption here was that in a testing suite, you cannot have one w/out the other,
            so we coupled them together in a single compoent */}
            <Label>Selector:</Label>
            {/* update assertion's selector property based off user input */}
            <Input
              placeholder="ex: h1, className, Id"
              value={thisAssertion.selector}
              onChange={(e: any) => {
                handleSelectionChoice(e.target.value, itIndex);
              }}
            />
          </Form>
          <section id="selectRow">
            {/* update assertion's callback property based off user choice */}
            <Select
              id="selectAssert"
              value={thisAssertion.callback}
              onChange={(e: any) => {
                handleCallbackChoice(e.target.value, itIndex);
              }}
            >
              <option value="" key={`cb-${itIndex}`} disabled>
                Callbacks
              </option>
              {renderCallbackOptions()}
            </Select>
            {/* update assertion's 'assertion' property based off user choice */}
            <Select
              id="selectAssert"
              value={thisAssertion.assertion}
              onChange={(e: any) => {
                handleAssertionsChoice(e.target.value, itIndex);
              }}
            >
              <option value="" key={`assert-${itIndex}`} disabled>
                Assertions
              </option>
              {renderAssertionOptions()}
            </Select>
          </section>
          <Form id="assertForm">
            <Label>Expected Result:</Label>
            {/* update assertion's input property based off user input */}
            <Input
              placeholder="ex: Hello world..."
              value={thisAssertion.userInput}
              onChange={(e: any) => {
                handleAssertionsUserInput(e.target.value, itIndex);
              }}
            />
          </Form>
        </section>
      </div>
    </div>
  );
};

export default AssertionBlock;
