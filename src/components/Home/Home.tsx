// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Link } from 'react-router-dom';
import ManualTestCreation from '../TestCreation/ManualTestCreation';
import FileDirectory from '../FileDirectory/FileDirectory';
import Monaco from '../Monaco/Monaco';
// import * as monaco from 'monaco-editor'
// STYLES
import { Title } from '../../assets/stylesheets/styled-components/Global'

const Home = () => {
  return (
    <div id='homeCont'>
      <Title>Welcome to pinocchio</Title>
      <div id='homeGrid'>
      <FileDirectory />
      <ManualTestCreation />
      <Monaco />
      </div>
      <Link to="/">
        Go To Landing
      </Link>
    </div>
  );
}

export default Home;
