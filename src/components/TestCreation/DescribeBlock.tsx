import React, { useContext } from 'react';
import ItBlock from './ItBlock';
import { TestContext } from '../../providers/TestProvider'

const DescribeBlock = (props) => {
  const { test, handleDBlockDescription, addItBlock } = useContext(TestContext);
  const newItIndex = Object.keys(test.nestedIts).length;

  const itArray = [];
  for (let key in test.nestedIts) {
    itArray.push(
      <ItBlock
      key={`it-${key}`} 
      itIndex={key} 
    />)
}
  return (
    <div style={{ backgroundColor: "#FEAE20" }}>
      <h1>Describe Block</h1>
      <form>
        <label> Describe Block</label>
        <input
          type="text"
          value={test.description}
          placeholder="What the test suite is testing"
          onChange={(e) => handleDBlockDescription(e.target.value)}
        />
      </form>
      <button 
      type="button"
      onClick={(e) => addItBlock(newItIndex)}
      >
        +It Statement
      </button>
      <button type="button">+Describe block</button>
      {itArray}
    </div>
  );
};

export default DescribeBlock;
