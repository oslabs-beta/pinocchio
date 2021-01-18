// eslint-disable-next-line no-use-before-define
import React from 'react';
import Editor from './Monaco/Monaco.jsx';
import * as monaco from 'monaco-editor'

import { Link } from 'react-router-dom';
import FileDirectory from '../components/FileDirectory';

function Home() {

  return (
    <div>
      <h1>Hi Home!</h1>
      <Editor />
      <FileDirectory></FileDirectory>
      <Link to='/'>
        Go To Landing
      </Link>

    </div>
  );
}

export default Home;
