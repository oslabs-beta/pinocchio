/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */ // ! Be careful
// eslint-disable-next-line no-use-before-define
import React from 'react';
import SideNavbar from '../SideNavBar/SideNavBar';
// STYLES
import './HowTo.scss';
import { Header } from '../../assets/stylesheets/styled-components/Global';
import whatIsPino from "../../assets/images/what-is-pinocchio.jpeg";
import landing from "../../assets/images/landing.gif";
import fileTreeDesc from "../../assets/images/file-tree-describe.gif";
import itBlockExp from "../../assets/images/it-block-export.gif";
const styleObj = {
  fontSize: 14,
  color: "#4a54f1",
}
const HowTo = () => (
  <div id="mainCont">
    <SideNavbar />
    <div className="howToCont">
      <Header id="header">How To Get Started with pinocchio</Header>
      <div>
        <h2 style={{ fontSize: 20 }}>
          Pinocchio is an Electron powered GUI for Puppeteer test generation with Mocha and Chai. It allows users to identify selectors for tests and preview code in the provided code editor. Once the tests have been created, an exportation of the test suites into the user&apos;s application is only a button click away.
        </h2>

        <br />

        <div className="image"><img src={whatIsPino} alt="what-is-pinocchio" /></div>

        <br />
        <br />

        <h2>
          For developers who are interested in using Google&apos;s powerful Puppeteer Node library specifically for testing purposes, they may have to initially spend some time parsing through the plethora of functionalities Puppeteer provides in order to identify which methods are most relevant to their testing goals.
        </h2>
        <br />
        <br />

        <p>
          Pinocchio minimizes Puppeteer onboarding labor and isolates specific Puppeteer methods that are often used in testing in conjunction with Mocha and Chai. The result is a more seamless transition that allows users to dive right into these technologies, saving developers precious time and energy.
        </p>

        <br />
        <br />

        <p>
          As a fresh beta product, Pinocchio was developed for the open source community with the tech accelerator
          {' '}
          <a href="https://opensourcelabs.io/">OSLabs</a>
        </p>

        <br />

        <h2>Installation</h2>
        <br />
        <h3>
          To get started,
        </h3>

        <br />

        <h3>
          1) Install Puppeteer, Mocha, and Chai.
        </h3>

        <h3>
          <code>npm install puppeteer mocha chai</code></h3>

        <br />
        <h3>
          2) Now, let&apos;s generate some tests!
        </h3>
        <br />

        <h3>How to use</h3>

        <br />

        <h3>
          1) From the landing page, the user will be able to input their application&apos;s URL and upload their app code base.
        </h3>

        <br />

        <div className="image"><img src={landing} alt="landing-gif" /></div>

        <br />

        <h3>
          3. Upon upload, the user will be able to
        </h3>

        <br />
        <br />

        <h3>
          - reference directories and files directly in the app itself using the file tree and code preview section powered by Monaco Editor and
          {' '}
          <br />
          - use the Pinocchio test generation GUI to generate test code without having to touch any code editor.
        </h3>

        <h3>
          3. Users have the option of generating one Describe block that wraps their test and are able to generate as many It statements as needed.
        </h3>

        <div className="image"><img src={fileTreeDesc} alt="file-tree-gif" /></div>

        <h3>
          4. Each It statement will correspond with any of the Puppeteer actions that the user selects as well as one Assertion block.
        </h3>
        <h3>
          5. When ready, simply click on &ldquo;Export Test&ldquo; in the navigation bar. That&apos;s it!
        </h3>
        <div className="image"><img src={itBlockExp} alt="it-block-gif" /></div>
        <br />
        <br />
        <br />
        <h3>Tech Stack</h3>
        <p>Javascript, React (Context, Hooks, Router, Toastify), Express, Webpack, Electron, Typescript, HTML/CSS/SASS, Monaco Editor, Node.js, Jest, Enzyme, Styled-Components</p>
        <br />
        <br />
        <h3>Read more</h3>
        <a href="https://medium.com/pinocchio-for-developers/play-with-pinocchio-a-puppeteer-test-generation-gui-8a9f9f501a7a">Medium Article</a>
        <br />
        <br />
        <h3>Contact Us</h3>
        pinocchiodevs@gmail.com
        <br />
        <a href="https://www.linkedin.com/company/pinocchio-dev">Contact Us</a>
        <br />
        We encourage and appreciate any feedback, suggestions, and stars if you feel so inclined!
        <br />
        <br />
        <b><h3>Co-Creators:</h3></b>
        <p>
          - Adam Joesten -
          {' '}
          <a href="https://github.com/AdamJoesten">@AdamJoesten</a>
          {' '}
          |
          {' '}
          <a href="https://www.linkedin.com/in/adamjoesten/">LinkedIn</a>
          <br />
          - Brandi Richardson -
          {' '}
          <a href="https://github.com/bjr2008">@bjr2008</a>
          {' '}
          |
          {' '}
          <a href="https://www.linkedin.com/in/brandi-richardson-28295158/">LinkedIn</a>
          <br />
          - Giao (&ldquo;Yao&ldquo;) Tran -
          {' '}
          <a href="https://github.com/gd-tran">@gd-tran</a>
          {' '}
          |
          {' '}
          <a href="https://www.linkedin.com/in/giao-tran-91353654/">LinkedIn</a>
          <br />
          - Harlan Evans -
          {' '}
          <a href="https://github.com/harlanevans">@harlanevans</a>
          {' '}
          |
          {' '}
          <a href="https://www.linkedin.com/in/harlan-evans/">LinkedIn </a>
          <br />
          - Lex Choi -
          {' '}
          <a href="https://github.com/lexiphur">@lexiphur</a>
          {' '}
          |
          {' '}
          <a href="https://www.linkedin.com/in/lexchoi3/">LinkdedIn</a>
        </p>
      </div>
    </div>
  </div >
);

export default HowTo;
