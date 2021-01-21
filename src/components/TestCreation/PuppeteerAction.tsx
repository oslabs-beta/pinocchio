import React, { useContext, useState } from "react";
import { TestContext } from "../../providers/TestProvider";
import AssertionBlock from "./AssertionBlock";

const PuppeteerAction = (props) => {
  const { handleActions } = useContext(TestContext);
  const [selectAction, setSelectAction] = useState("");

  const actionsList = ["Title", "Tap", "Click"];

  const renderOptions = () => {
    return actionsList.map((action) => {
      return (
        <option key={action} value={action}>
          {action}
        </option>
      );
    });
  };

  const handleSelectValue = (value) => {
    // props.index
    handleActions(value);
  };

  // TODO Adjust <select> to reflect chosen option value
  return (
    <div style={{ border: "solid 3px green" }}>
      <h1>PuppeteerAction</h1>
      <select
        value={selectAction}
        onChange={(e) => handleSelectValue(e.target.value)}
        >
        <option value="" disabled>
          Select Puppeteer Action
        </option>
        {renderOptions()}
      </select>
    </div>
  );
};

export default PuppeteerAction;
