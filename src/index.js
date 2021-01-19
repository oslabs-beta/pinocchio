/* eslint-disable import/no-unresolved */ // * be careful
// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app.tsx';
import FileProvider from './providers/FileProvider';

const main = document.createElement('div');
document.body.appendChild(main);

const container = document.createElement('container');


ReactDOM.render(
  <BrowserRouter>
    <FileProvider>
      <App />
    </FileProvider>
  </BrowserRouter>,
  main
);
