/* eslint-disable import/no-unresolved */ // * be careful
// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app.tsx';
import FileProvider from './providers/FileProvider';
import TestProvider from './providers/TestProvider';

const main = document.createElement('div');
document.body.appendChild(main);

const EditorView = document.createElement('div');
EditorView.id = 'container';

ReactDOM.render(
  <BrowserRouter>
    <FileProvider>
      <TestProvider>
        <App />
      </TestProvider>
    </FileProvider>
  </BrowserRouter>,
  main
);
