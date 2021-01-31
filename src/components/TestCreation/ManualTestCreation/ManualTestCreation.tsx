import React from 'react';
import DescribeBlock from '../DesribeBlock/DescribeBlock';
// STYLES
import './ManualTestCreation.scss';
import { Header } from '../../../assets/stylesheets/styled-components/Global';

const ManualTestCreation = () => (
  <div id="testCont">
    <Header id="manTestHeader">Manual Test Creation</Header>
    <DescribeBlock />
  </div>
);
export default ManualTestCreation;
