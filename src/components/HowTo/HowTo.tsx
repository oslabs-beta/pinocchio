/* eslint-disable import/no-unresolved */ // * Be careful
// eslint-disable-next-line no-use-before-define
import React from 'react';
import SideNavbar from '../SideNavBar/SideNavBar';
// STYLES
import './HowTo.scss';
import { Header } from '../../assets/stylesheets/styled-components/Global';

const HowTo = () => (
  <div id="mainCont">
    <SideNavbar />
    <Header id="header">How To Get Started with pinocchio</Header>
  </div>
);

export default HowTo;
