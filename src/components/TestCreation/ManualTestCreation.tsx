import React from 'react';
import DescribeBlock from './DescribeBlock';
import { TestContext } from '../../providers/TestProvider'

const ManualTestCreation = (props) => (
  <div>
    <h1>
      Manual Test Creation
    </h1>
    <button type="button">+Describe block</button>
    <DescribeBlock key = 0/>
  </div>
);

export default ManualTestCreation;
