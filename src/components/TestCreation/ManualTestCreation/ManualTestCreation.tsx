// REACT LIBRARIES
/* eslint-disable-next-line no-use-before-define */
import React from 'react';
/* eslint-disable-next-line import/no-unresolved */ // ! Be careful
import DescribeBlock from '../DesribeBlock/DescribeBlock';
// STYLES
import './ManualTestCreation.scss';
import { Header } from '../../../assets/stylesheets/styled-components/Global';

const ManualTestCreation = () => (
  // Container for the test-creation blocks
  <div id="testCont">
    <Header id="manTestHeader">Manual Test Creation</Header>
    <DescribeBlock />
  </div>
);
export default ManualTestCreation;
