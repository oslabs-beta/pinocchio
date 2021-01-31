import React, { useContext, useState } from "react";
import { TestContext } from "../../../providers/TestProvider";
// STYLES
import {
  Form,
  Input,
  Label,
  Select,
  SubHeader,
} from "../../../assets/stylesheets/styled-components/Global";
import "./AssertionBlock.scss";

const AssertionBlock = (props) => {
  const { handleAssertionsChoice, handleAssertionsUserInput, handleCallbackChoice, handleSelectionChoice, test} = useContext(TestContext)
  // expect (html node) --> assertions compared to (a user input)

  const assertionArrays = ["to.be.equal", "to.not.equal"];
  const evalCallbacks = ["getValue", "getLength", "getInnerText"];

  const renderCallbackOptions = () => {
    return evalCallbacks.map((callback) => {
      return <option value={callback}>{callback}</option>;
    });
  };

  const renderAssertionOptions = () => {
    return assertionArrays.map((assert) => {
      return <option value={assert}>{assert}</option>;
    });
  };

  return (
    <div id="assertCont">
      <SubHeader>Assertion Block</SubHeader>
      <div id="formCont">
        <section id="selectAssertCont">
          <Form id='assertForm'>
            <Label>Selector:</Label>
            <Input
              placeholder="ex: h1, className, Id"
              value={test.nestedIts[props.itIndex].assertions.selector}
              onChange={(e) => {
                setSelector(e.target.value);
                handleSelectionChoice(e.target.value, props.itIndex);
              }}
            />
          </Form>
          <section id='selectRow'>

          <Select
            id='selectAssert'
            value={test.nestedIts[props.itIndex].assertions.callback}
            onChange={(e) => {
              setCallbackChoice(e.target.value);
              handleCallbackChoice(e.target.value, props.itIndex);
            }}
            >
            <option value="" disabled>
              Callbacks
            </option>
            {renderCallbackOptions()}
          </Select>

          <Select
            id='selectAssert'
            value={test.nestedIts[props.itIndex].assertions.assertion}
            onChange={(e) => {
              setAssertionChoice(e.target.value);
              handleAssertionsChoice(e.target.value, props.itIndex);
            }}
            >
            <option value="" disabled>
              Assertions
            </option>
            {renderAssertionOptions()}
          </Select>
            </section>
        <Form id='assertForm'>
            <Label>Expected Result:</Label>
        <Input
          placeholder="ex: Hello world..."
          value={test.nestedIts[props.itIndex].assertions.userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
            handleAssertionsUserInput(e.target.value, props.itIndex);
          }}
          />
          </Form>
          </section>
      </div>
    </div>
  );
};

export default AssertionBlock;
