import React from 'react';
import { TestContext } from '../../providers/TestProvider'
import PuppeteerAction from './PuppeteerAction';

const ItBlock = (props) => (
  <div>
    <h1>
      It Block
    </h1>
    <label> It Block </label>
    <PuppeteerAction />
    <input type="text" placeholder="The specific test functionality" />
    <button type="button">+Puppeteer Action</button>
    <button type="button">+Assertion</button>
  </div>
);

export default ItBlock;
