import React, { useContext } from 'react';
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
  const {
    handleAssertionsChoice,
    handleAssertionsUserInput,
    handleCallbackChoice,
    handleSelectionChoice,
    test,
  }: any = useContext(TestContext);
  // expect (html node) --> assertions compared to (a user input)
  const thisAssertion = test.nestedIts[itIndex].assertions;

  const assertionArrays = ['to.be.equal', 'to.not.equal'];
  // $eval puppeteer action callback choices
  const evalCallbacks = ['getValue', 'getLength', 'getInnerText'];

  const renderCallbackOptions = () => evalCallbacks.map(
    (callback) => <option key={callback} value={callback}>{callback}</option>,
  );

  const renderAssertionOptions = () => assertionArrays.map(
    (assert) => <option key={assert} value={assert}>{assert}</option>,
  );

  return (
    <div id="assertCont">
      <SubHeader>Assertion Block</SubHeader>
      <div id="formCont">
        <section id="selectAssertCont">
          <Form id="assertForm">
            <Label>Selector:</Label>
            <Input
              placeholder="ex: h1, className, Id"
              value={thisAssertion.selector}
              onChange={(e: any) => {
                handleSelectionChoice(e.target.value, itIndex);
              }}
            />
          </Form>
          <section id="selectRow">

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
