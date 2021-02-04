/* eslint-disable import/no-unresolved */ // * be careful
// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import FileProvider from './providers/FileProvider.tsx';
import TestProvider from './providers/TestProvider';


ReactDom.render(
  <HashRouter>
    <FileProvider>
      <TestProvider>
        <App />
      </TestProvider>
    </FileProvider>
  </HashRouter>,
  document.getElementById('root')
);
