import React, { useContext, useState } from "react";
import { TestContext } from "../../providers/TestProvider";
import AssertionBlock from "./AssertionBlock";

const PuppeteerAction = (props) => {
  const { handleActions, handleActionsNode } = useContext(TestContext);
  const [selectAction, setSelectAction] = useState("");

  const actionsList = ["getValue", "getInnerText", "getLength"];

  // How do we allow the user to dynamically create their tests,
  // or do explicitally tell them what they can do.
//   {getInnerText: `.$eval(${label}, (el) => el.getInnerText)`,
// getLength: `.$eval(${label}, (el) => el.getLength)`}

  const renderOptions = () => {
    return actionsList.map((action) => {
      return (
        <option key={action} value={action}>
          {action}
        </option>
      );
    });
  };

  const handleActionSelect = (value) => {
    // props.index
    handleActions(value, props.index);
  };

  const handleHTMLNode = (value) => {
    handleActionsNode(value, props.index)
  }

  // TODO Adjust <select> to reflect chosen option value
  return (
    <div style={{ border: "solid 3px green" }}>
      <h1>PuppeteerAction</h1>
      <select
        value={selectAction}
        onChange={(e) => handleActionSelect(e.target.value)}
        >
        <option value="" disabled>
          Select Puppeteer Action
        </option>
        {renderOptions()}
      </select>
      <input placeholder="HTML Tag" onChange={(e) => handleHTMLNode(e.target.value)}/>
    </div>
  );
};

export default PuppeteerAction;
