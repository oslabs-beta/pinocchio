import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.tsx'
import FileProvider from './providers/FileProvider';

const main = document.createElement('div');
document.body.appendChild(main);

ReactDOM.render(
  <FileProvider>
    <App />
  </FileProvider >,
  main);