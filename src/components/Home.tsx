// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Link } from 'react-router-dom';
import ManualTestCreation from './TestCreation/ManualTestCreation';
import FileDirectory from './FileDirectory';
import Monaco from './Monaco/Monaco';
// import * as monaco from 'monaco-editor'

const Home = () => {
  return (
    <div>
      <h1>Hi Home!</h1>
      <FileDirectory />
      <ManualTestCreation />
      <Link to="/">
        Go To Landing
      </Link>
      <Monaco />
    </div>
  );
}

export default Home;
