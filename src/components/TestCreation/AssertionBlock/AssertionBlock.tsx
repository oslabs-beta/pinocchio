import React, { useContext, useState } from "react";
import {
  Input,
  Select,
  SubHeader,
} from "../../../assets/stylesheets/styled-components/Global";
import { TestContext } from "../../../providers/TestProvider";

// STYLES
import "./AssertionBlock.scss";

const AssertionBlock = (props) => {
  const [userInput, setUserInput] = useState("");
  const [assertionChoice, setAssertionChoice] = useState("");

  const {
    handleAssertionsChoice,
    handleAssertionsUserInput,
    test,
  } = useContext(TestContext);
  // expect (html node) --> assertions compared to (a user input)

  const assertionArrays = [
    "to.be.equal",
    "to.not.equal",
    "to.be.true",
    "to.be.false",
  ];

  const renderAssertionOptions = () => {
    return assertionArrays.map((assert) => {
      return <option value={assert}>{assert}</option>;
    });
  };

  const handleAssertionChoice = (e: string) => {
    // global handler
    handleAssertionsChoice(e, props.index);
  };

  const handleAssertionInput = (e: string) => {
    // global handler
    handleAssertionsUserInput(e, props.index);
  };

  return (
    <div id="assertCont">
      <SubHeader>Assertion Block</SubHeader>
      <div id="formCont">
        <div id="selectAssert">
          <Select
            value={assertionChoice}
            onChange={(e) => handleAssertionChoice(e.target.value)}
          >
            <option value="" disabled>
              Assertions
            </option>
            {renderAssertionOptions()}
          </Select>
        </div>
        <Input
          placeholder="User input"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
            handleAssertionInput(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default AssertionBlock;
