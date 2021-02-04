import React from 'react';

// STYLES
import './HowTo.scss'
import { Header } from '../../assets/stylesheets/styled-components/Global';
import SideNavbar from '../SideNavBar/SideNavBar';

const HowTo = () => {

  return (
    <div id='mainCont'>
      <SideNavbar />
      <Header id='header'>How To Get Started with pinocchio</Header>
    </div>
  )
}

export default HowTo;