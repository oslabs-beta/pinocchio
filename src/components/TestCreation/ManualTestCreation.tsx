import React from 'react';
import DescribeBlock from './DescribeBlock';
import { TestContext } from '../../providers/TestProvider'

const ManualTestCreation = (props) => {
  

  return (
    <div>
    <h1>
      Manual Test Creation
    </h1>
    <button type="button">+Describe block</button>
    <DescribeBlock />
    <button>Export my Test</button>
  </div>
    )
};

export default ManualTestCreation;
