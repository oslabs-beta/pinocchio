import React, { useContext } from "react";
import DescribeBlock from "../DesribeBlock/DescribeBlock";
import { TestContext } from "../../../providers/TestProvider";
import { FileContext } from "../../../providers/FileProvider";
import GenerateTest from "../GenerateTest";
import { fileInterface } from "../../../utils/fileTypes";

// allow communicaiton between react app and electron renderer
const { remote } = window.require("electron");
// allow remote process to have access to node fs module
const electronFs = remote.require("fs");

// STYLES
import "./ManualTestCreation.scss";
import {
  Button,
  Header,
} from "../../../assets/stylesheets/styled-components/Global";

// TODO: Possibly rethink naming convention
const ManualTestCreation = (props) => {
  const { test, URL } = useContext(TestContext);
  const { myPath, fileTreeHandler } = useContext(FileContext);

  const exportTestFile = () => {
    if (!electronFs.existsSync(myPath + "/__tests__")) {
      electronFs.mkdirSync(myPath + "/__tests__");
    }
    electronFs.writeFileSync(
      myPath + `/__tests__/pinocchio.test.js`,
      GenerateTest(test, URL)
    ); // TODO: THIS
  };
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

  return (
    <div id="testCont">
      <Header id="manTestHeader">Manual Test Creation</Header>
      <DescribeBlock />
    </div>
  );
};

export default ManualTestCreation;
