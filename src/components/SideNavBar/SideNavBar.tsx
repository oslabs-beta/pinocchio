import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FileContext } from "../../providers/FileProvider";
import { TestContext } from "../../providers/TestProvider";
import GenerateTest from "../TestCreation/GenerateTest";

// allow communicaiton between react app and electron renderer
const { remote } = window.require("electron");
// allow remote process to have access to node fs module
const electronFs = remote.require("fs");

// STYLES
import "./SideNavBar.scss";
import Logo from "../../assets/icons/pinocchio.svg";

const SideNavbar = () => {
// On export testFile success - do something - toggle to true
  const [exportSuccess, setExportSuccess] = useState(false)
  const { handleToggleTree, myPath } = useContext(FileContext);
  const { test } = useContext(TestContext);

  const exportTestFile = () => {
    if (!electronFs.existsSync(myPath + "/__tests__")) {
      electronFs.mkdirSync(myPath + "/__tests__");
    }
    electronFs.writeFileSync(
      myPath + `/__tests__/pinocchio.test.js`,
      GenerateTest(test, "www.google.com")
    );
  };

  return (
    <nav id="mainNav">
      <div id="navItemsCont">
        <Link to="/home">
          <div id="navLogoCont">
            <img src={Logo} id="navLogo" />
          </div>
        </Link>
        <div id="navItem" onClick={() => handleToggleTree()}>
          Toggle <div>Tree</div>
        </div>
        <Link to="/" id="navItem">
          Upload
          <div>New</div>
        </Link>
        <Link to="/howto" id="navItem">
          How To
        </Link>
        <div id="navItem" onClick={() => exportTestFile()}>
          Export
          <div>Test</div>
        </div>
      </div>
    </nav>
  );
};

export default SideNavbar;
