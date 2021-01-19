import React from 'react';
import ItBlock from './ItBlock';
import { TestContext } from '../../providers/TestProvider'

const DescribeBlock = (props) => (
  <div>
    <h1>
      Describe Block
    </h1>
    <label> Describe Block</label>
    <input type="text" placeholder="What the test suite is testing" />
    <button type="button">+It Statement</button>
    <ItBlock />
  </div>
);

export default DescribeBlock;
