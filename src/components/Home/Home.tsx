// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ManualTestCreation from '../TestCreation/ManualTestContainer/ManualTestCreation';
import FileDirectory from '../FileDirectory/FileDirectory';
import Monaco from '../Monaco/Monaco';
// import * as monaco from 'monaco-editor'
// STYLES
import { Title } from '../../assets/stylesheets/styled-components/Global'
import './Home.scss'
import SideNavbar from '../SideNavBar/SideNavBar';
import { FileContext } from '../../providers/FileProvider';

const Home = () => {
  const { toggleTree } = useContext(FileContext)


  return (
    <div id="homeCont">
      <SideNavbar />
      <div id="homeGrid">
        <Title id="header">pinocchio</Title>
        <div id="testGrid">
          {toggleTree && <FileDirectory />}
          <ManualTestCreation />
          <Monaco />
        </div>
      </div>
    </div>
  );
}

export default Home;
