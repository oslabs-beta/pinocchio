import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { FileContext } from "../../providers/FileProvider";
import { TestContext } from "../../providers/TestProvider";
import GenerateTest from "../TestCreation/GenerateTest";
import 'react-toastify/dist/ReactToastify.min.css';

// allow communicaiton between react app and electron renderer
const { remote } = window.require("electron");
// allow remote process to have access to node fs module
const electronFs = remote.require("fs");

// STYLES
import "./SideNavBar.scss";
import Logo from "../../assets/icons/pinocchio.svg";

const SideNavbar = () => {
  // On export testFile success - do something - toggle to true
  const [exportSuccess, setExportSuccess] = useState(false);
  const { test, URL } = useContext(TestContext);
  const { handleToggleTree, myPath, fileTreeHandler, testFileName} = useContext(FileContext);

  const filePathMap: any = {};
  const generateFileTree = (directory: string) => {
    // use readdirSync fs node module through electron to read folder contents at given path
    // this returns an array of file/folder paths that are mapped over
    // eslint-disable-next-line max-len
    const filterArray: Array<string> = electronFs
      .readdirSync(directory)
      .filter(
        (element: string) => element !== "node_modules" && element[0] !== "."
      );

    const fileArray: Array<fileInterface> = filterArray.map(
      (fileName: string) => {
        // remove backslashes from path of the directory and replace with forward (for PC)
        let filePath: string = directory.replace(/\\/g, "/");
        // create a filepath to the current file/folder being iterated over
        filePath = `${filePath}/${fileName}`;
        // returned after each iteration: The path to the current file/folder, file name, nested files
        const file: fileInterface = {
          filePath,
          fileName,
          files: [],
        };
        // Allow access to meta data about current file/folder being iterated over
        // any is used here since we are interacting with a 3rd party API
        const fileData: any = electronFs.statSync(file.filePath);
        if (file.fileName !== "node_modules" && file.fileName[0] !== ".") {
          if (fileData.isDirectory()) {
            // if the current element being iterated over is a folder...
            // use recursion to assign all nested files/folders arbitrarily deep to current file.files
            file.files = generateFileTree(file.filePath);
            // if any files in dir have appropriate file ext, save name + filepath to filePathMap
            file.files.forEach((nestedFile: fileInterface) => {
              // ? applied to all nested files?
              const javaScriptFileTypes: Array<string> = [
                "js",
                "jsx",
                "ts",
                "tsx",
              ];
              const fileType = nestedFile.fileName.split(".")[1];
              if (javaScriptFileTypes.includes(fileType)) {
                const componentName: string = nestedFile.fileName.split(".")[0];
                filePathMap[componentName] = nestedFile.filePath;
              }
            });
          }
        }
        return file;
      }
    );
    // console.log(fileArray); // ? eventually delete
    return fileArray;
  };

  const exportTestFile = () => {
    if (!electronFs.existsSync(myPath + "/__tests__")) {
      electronFs.mkdirSync(myPath + "/__tests__");
    }
    electronFs.writeFileSync(
      myPath + `/__tests__/${testFileName}.js`,
      GenerateTest(test, URL)
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
        <div
          id="navItem"
          onClick={() => {
            exportTestFile();
            fileTreeHandler(generateFileTree(myPath));
            toast.info('Success!', {
              position: "top-right",
              autoClose: 2500,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              style: {
                backgroundColor: '#099cd7'
              }
              });
          }}
        >
          Export
          <div>Test</div>
        </div>
      </div>
    </nav>
  );
};

export default SideNavbar;
