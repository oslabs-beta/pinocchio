import React, { useContext, useState } from "react";
import { TestContext } from "../../providers/TestProvider";

const AssertionBlock = (props) => {
  const [userInput, setUserInput] = useState("");
  const [assertionChoice, setAssertionChoice] = useState("");

  const { handleAssertionsChoice, handleAssertionsUserInput, test} = useContext(TestContext)
  // expect (html node) --> assertions compared to (a user input)

  const assertionArrays = ["to.be.equal", "to.not.equal", "to.be.true", "to.be.false"];

  const renderAssertionOptions = () => {
    return assertionArrays.map((ass) => {
      return <option value={ass}>{ass}</option>;
    });
  };

  const handleAssertionChoice = (e: string) => {
    // global handler
    handleAssertionsChoice( e, props.index)
  };

  const handleAssertionInput = (e: string) => {
    // global handler
    handleAssertionsUserInput(e, props.index)
  };

  return (
    <div style={{ border: "solid 3px red" }}>
      <h1>Assertion Block</h1>
      <div>
        <select
          value={assertionChoice}
          onChange={(e) => handleAssertionChoice(e.target.value)}
        >
          <option value="" disabled>
            Assertions
          </option>
          {renderAssertionOptions()}
        </select>
        <input
          placeholder="User input"
          value={userInput}
          onChange={(e) => {setUserInput(e.target.value); handleAssertionInput(e.target.value)}}
        />
      </div>
    </div>
  );
};

export default AssertionBlock;
