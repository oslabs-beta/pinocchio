/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */ // ! Be careful
// eslint-disable-next-line no-use-before-define
import React from "react";
import SideNavbar from "../SideNavBar/SideNavBar";
// STYLES
import "./HowTo.scss";
import {
  Header,
  SubHeader,
} from "../../assets/stylesheets/styled-components/Global";
import whatIsPino from "../../assets/images/what-is-pinocchio.jpeg";
import landing from "../../assets/images/landing.gif";
import fileTreeDesc from "../../assets/images/file-tree-describe.gif";
import itBlockExp from "../../assets/images/it-block-export.gif";
const styleObj = {
  fontSize: 14,
  color: "#4a54f1",
};
const HowTo = () => (
  <div id="mainCont">
    <SideNavbar />
    <div id="howToContCol">
      <div id="headerRow">
        <Header id="header">How To Get Started with pinocchio</Header>
      </div>
      <div id="contentCont">
        <SubHeader id="subheaderCont">
          Pinocchio is an Electron powered GUI for Puppeteer test generation
          with Mocha and Chai. It allows users to identify selectors for tests
          and preview code in the provided code editor. Once the tests have been
          created, an exportation of the test suites into the user&apos;s
          application is only a button click away.
        </SubHeader>
        <div id="topImageCont">
          <img src={whatIsPino} alt="what-is-pinocchio" id="topImage" />
        </div>
        <p id="pTextCont">
          For developers who are interested in using Google&apos;s powerful
          Puppeteer Node library specifically for testing purposes, they may
          have to initially spend some time parsing through the plethora of
          functionalities Puppeteer provides in order to identify which methods
          are most relevant to their testing goals.
        </p>
        <p id="pTextCont">
          Pinocchio minimizes Puppeteer onboarding labor and isolates specific
          Puppeteer methods that are often used in testing in conjunction with
          Mocha and Chai. The result is a more seamless transition that allows
          users to dive right into these technologies, saving developers
          precious time and energy.
        </p>
        <p id="pTextCont">
          As a fresh beta product, Pinocchio was developed for the open source
          community with the tech accelerator{" "}
          <a href="https://opensourcelabs.io/">OSLabs</a>.
        </p>
        <SubHeader id="hThreeHow">Installation</SubHeader>
        <div id="installationCont">
          {/* <h3>To get started,</h3> */}
          <h3 id="hThree">1) Install Puppeteer, Mocha, and Chai.</h3>
          <h3 id="hThree">
            <code>npm install puppeteer mocha chai</code>
          </h3>
          <h3 id="hThree">2) Now, let&apos;s generate some tests!</h3>
        </div>
        <h3 id="hThreeHow">How to use</h3>
        <h3 id="hThree">
          1) From the landing page, the user will be able to input their
          application&apos;s URL and upload their app code base.
        </h3>
        <div id="topImageCont">
          <img src={landing} alt="landing-gif" id="topImage" />
        </div>
        <h3 id="hThree">3. Upon upload, the user will be able to</h3>
        <div id="installationCont" style={{ textAlign: "center" }}>
          <h3>
            - reference directories and files directly in the app itself using
            the
          </h3>
          <h3>
            - use the Pinocchio test generation GUI to generate test code
            without having to touch any code editor.
          </h3>
        </div>
        <h3 id="hThree">
          3. Users have the option of generating one Describe block that wraps
          their test and are able to generate as many It statements as needed.
        </h3>
        <div id="topImageCont">
          <img src={fileTreeDesc} alt="file-tree-gif" id="topImage" />
        </div>
        <h3 id="hThree">
          4. Each It statement will correspond with any of the Puppeteer actions
          that the user selects as well as one Assertion block.
        </h3>
        <h3 id="hThree">
          5. When ready, simply click on &ldquo;Export Test&ldquo; in the
          navigation bar. That&apos;s it!
        </h3>
        <div id="topImageCont">
          <img src={itBlockExp} alt="it-block-gif" id="topImage" />
        </div>
        <h3 id="hThreeHow">Tech Stack</h3>
        <p id="hThree">
          Javascript, React (Context, Hooks, Router, Toastify), Express,
          Webpack, Electron, Typescript, HTML/CSS/SASS, Monaco Editor, Node.js,
          Jest, Enzyme, Styled-Components
        </p>
        <div id="footer">
          <p>Read more</p>
          <a href="https://medium.com/pinocchio-for-developers/play-with-pinocchio-a-puppeteer-test-generation-gui-8a9f9f501a7a">
            Medium Article
          </a>
          <h3>Contact Us</h3>
          pinocchiodevs@gmail.com
          <a href="https://www.linkedin.com/company/pinocchio-dev">
            Contact Us
          </a>
          We encourage and appreciate any feedback, suggestions, and stars if
          you feel so inclined!
          <h3 id="hThreeHow">Co-Creators:</h3>
          <p id="hThreeRow">
            <h2 id="names">- Adam Joesten - </h2>{" "}
            <a href="https://github.com/AdamJoesten">@AdamJoesten</a> |{" "}
            <a href="https://www.linkedin.com/in/adamjoesten/">LinkedIn</a>
            <h2 id="names"> - Brandi Richardson - </h2>{" "}
            <a href="https://github.com/bjr2008">@bjr2008</a> |{" "}
            <a href="https://www.linkedin.com/in/brandi-richardson-28295158/">
              LinkedIn
            </a>
            <h2 id="names"> - Giao (&ldquo;Yao&ldquo;) Tran - </h2>{" "}
            <a href="https://github.com/gd-tran">@gd-tran</a> |{" "}
            <a href="https://www.linkedin.com/in/giao-tran-91353654/">
              LinkedIn
            </a>
            <h2 id="names"> - Harlan Evans - </h2>{" "}
            <a href="https://github.com/harlanevans">@harlanevans</a> |{" "}
            <a href="https://www.linkedin.com/in/harlan-evans/">LinkedIn </a>
            <h2 id="names"> - Lex Choi - </h2>{" "}
            <a href="https://github.com/lexiphur">@lexiphur</a> |{" "}
            <a href="https://www.linkedin.com/in/lexchoi3/">LinkdedIn</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default HowTo;
