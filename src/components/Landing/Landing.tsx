/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */ // * be careful
// eslint-disable-next-line no-use-before-define
import React, { useContext, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
// GLOBAL STATE
import { FileContext } from '../../providers/FileProvider';
import { TestContext } from '../../providers/TestProvider';
// TYPESCRIPT INTERFACE
import { fileInterface } from '../../utils/fileTypes';
// STYLES
import './Landing.scss';
import {
  Input,
  Button,
  Title,
  SubTitle,
} from '../../assets/stylesheets/styled-components/Global';
import Logo from '../../assets/icons/pinocchio.svg';

// allow communicaiton between react app and electron renderer
const { remote } = window.require('electron');

// allow remote process to have access to node fs module
const electronFs = remote.require('fs');

// display native system dialogs for opening and saving files, alerting, etc.
const { dialog } = remote;
const Landing = () => {
  const { myPath, pathHandler, fileTreeHandler }: any = useContext(FileContext);
  const { handleResetState, URL, setURL }: any = useContext(TestContext);

  const [pathUploaded, setPathUploaded] = useState(false);
  let mainDirectory: string = '';
  const filePathMap: any = {};

  const generateFileTree = (directory: string) => {
    // use readdirSync fs node module through electron to read folder contents at given path
    // this returns an array of file/folder paths that are mapped over
    // eslint-disable-next-line max-len
    const filterArray: Array<string> = electronFs
      .readdirSync(directory)
      .filter(
        (element: string) => element !== 'node_modules' && element[0] !== '.',
      );

    const fileArray: Array<fileInterface> = filterArray.map(
      (fileName: string) => {
        // remove backslashes from path of the directory and replace with forward (for PC)
        let filePath: string = directory.replace(/\\/g, '/');
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
        if (file.fileName !== 'node_modules' && file.fileName[0] !== '.') {
          if (fileData.isDirectory()) {
            // if the current element being iterated over is a folder...
            // use recursion to assign all nested files/folders arbitrarily deep to current file.files
            file.files = generateFileTree(file.filePath);
            // if any files in dir have appropriate file ext, save name + filepath to filePathMap
            file.files.forEach((nestedFile: fileInterface) => {
              // ? applied to all nested files?
              const javaScriptFileTypes: Array<string> = [
                'js',
                'jsx',
                'ts',
                'tsx',
              ];
              const fileType = nestedFile.fileName.split('.')[1];
              if (javaScriptFileTypes.includes(fileType)) {
                const componentName: string = nestedFile.fileName.split('.')[0];
                filePathMap[componentName] = nestedFile.filePath;
              }
            });
          }
        }
        return file;
      },
    );
    return fileArray;
  };

  // handles click of upload button and returns file path of desired project folder
  const handleUploadButton = () => {
    // open systems dialog to upload folder to app, restrict file type by extension
    dialog
      .showOpenDialog({
        // There was a filter for file types such as .jsx, .js .tsx, etc
        // removed for Linux compatibililty
        properties: ['openDirectory'],
        message: 'Please choose your project folder',
      })
      .then((filePath: any) => {
        // extract directory file path, send it to global state and create a file tree from it
        mainDirectory = filePath.filePaths[0];
        fileTreeHandler(generateFileTree(mainDirectory));
        pathHandler(filePath.filePaths[0]);
      })
      // boolean used for react router redirection
      .then(() => setPathUploaded(true))
      .then(() => {
        if (myPath) handleResetState();
      })
      .catch((err: any) => console.log(err)); // ! @babel/plugin-proposal-throw-expressions
  };

  // conditional rendering of homepage via react router
  if (pathUploaded) return <Redirect to="/home" />;
  return (
    <div id="landingCont">
      <div id="titleCont">
        <Title id="landingHeaders">Welcome to Pinocchio</Title>
        <div id="imgCont">
          <img alt="pinocchio logo" src={Logo} id="svgLogo" />
        </div>
        <SubTitle id="landingHeaders">A Puppeteer Test GUI</SubTitle>
      </div>
      <div id="getStarted">
        <div id="fillerDiv" />
        <div id="getStartedRowOne">
          <div id="inputCol">
            <span id="numSpan">1</span>
            <Input
              type="text"
              value={URL}
              onChange={(e: { target: { value: any; }; }) => {
                setURL(e.target.value);
              }}
              placeholder="Please Enter Your Application's URL"
              id="inputLanding"
              required
            />
          </div>
          <div id="buttonCol">
            <span id="numSpan">2</span>
            <Button type="button" onClick={handleUploadButton} disabled={!URL}>
              Upload your directory
            </Button>
          </div>
        </div>
        <div>
          {myPath && (
          <Link to="/home">
            <Button>Go Back</Button>
          </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
