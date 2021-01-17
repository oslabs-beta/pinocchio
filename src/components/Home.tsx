// eslint-disable-next-line no-use-before-define
import React from 'react';
import Editor from './Monaco/Monaco.jsx';
import * as monaco from 'monaco-editor'


function Home() {

  return (
    <div>
      <h1>Hi Home!</h1>
      <Editor />
    </div>
  );
}

export default Home;
