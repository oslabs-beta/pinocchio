import React, { useContext } from 'react';
import ItBlock from './ItBlock';
import { TestContext } from '../../providers/TestProvider'

const DescribeBlock = (props) => {
  const { test, handleDBlockDescription } = useContext(TestContext);

  return (
    <div>
      <h1>
        Describe Block
      </h1>
      <form>
        <label> Describe Block</label>
        <input
          type="text"
          value={test.description}
          placeholder="What the test suite is testing"
          onChange={(e) => handleDBlockDescription(e.target.value)}
        />
      </form>
      <button type="button">+It Statement</button>
      <button type="button">+Describe block</button>
      <ItBlock />
    </div>
  );
};

export default DescribeBlock;
