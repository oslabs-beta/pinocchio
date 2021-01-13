import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.tsx'

const main = document.createElement('div');
document.body.appendChild(main);

ReactDOM.render(<App />, main);