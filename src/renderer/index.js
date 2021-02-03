/* eslint-disable import/no-unresolved */ // * be careful
// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import FileProvider from './providers/FileProvider.tsx';
import TestProvider from './providers/TestProvider';

const main = document.createElement('div');
document.body.appendChild(main);

ReactDOM.render(
  <HashRouter>
    <FileProvider>
      <TestProvider>
        <App />
      </TestProvider>
    </FileProvider>
  </HashRouter>,
  main,
  // document.querySelector('root')
);
