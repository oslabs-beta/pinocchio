// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Link } from 'react-router-dom';
import FileDirectory from './FileDirectory';
import Editor from './Monaco/Monaco';
// import * as monaco from 'monaco-editor'

const Home = () => {
  return (
    <div>
      <h1>Hi Home!</h1>
      <FileDirectory></FileDirectory>
      <Link to='/'>
        Go To Landing
      </Link>
      <Editor />
    </div>
  );
}

export default Home;
