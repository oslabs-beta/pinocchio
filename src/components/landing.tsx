import React, { useContext } from 'react';
import { FileContext } from '../providers/FileProvider';
import { fileInterface } from '../utils/fileTypes';

const { remote } = window.require('electron');
const electronFs = remote.require('fs');

// Display native system dialogs for opening and saving files, alerting, etc.
const { dialog } = remote;

const Landing = () => {
  const { myPath, pathHandler } = useContext(FileContext);
  let mainDirectory: string = '';
  const filePathMap: any = {};

  const generateFileTree = (directory: string) => {
    // eslint-disable-next-line max-len
    const fileArray: Array<fileInterface> | fileInterface = electronFs.readdirSync(directory).map((fileName: string) => {
      const filePath: string = `${directory}\\${fileName}`;
      const file: fileInterface = {
        filePath,
        fileName,
        files: [],
      };
      const fileData: any = electronFs.statSync(file.filePath);
      if (file.fileName !== 'node_modules' && file.fileName !== '.git') {
        if (fileData.isDirectory()) {
          file.files = generateFileTree(file.filePath);
          file.files.forEach((nestedFile: fileInterface) => {
            const javaScriptFileTypes: Array<string> = ['js', 'jsx', 'ts', 'tsx'];
            const fileType = nestedFile.fileName.split('.')[1];
            if (javaScriptFileTypes.includes(fileType)) {
              const componentName: string = nestedFile.fileName.split('.')[0];
              filePathMap[componentName] = nestedFile.filePath;
            }
          });
        }
      }
      return file;
    });
    console.log(fileArray);
    return fileArray;
  };

  // returns file path of desired project folder
  const handleUploadButton = () => {
    console.log("You clicked me; dialog: ", dialog);
    // showOpenDialog is an electron method that returns file path from user's local machine
    // filter the directory path a user can choose depending on file extension
    dialog.showOpenDialog(
      {
        properties: ['openDirectory', 'openFile'],
        message: 'Please choose a project',
        filters: [
          { name: 'Javascript Files', extensions: ['js', 'jsx'] },
          { name: 'Typescript Files', extensions: ['ts', 'tsx'] },
          { name: 'Style', extensions: ['css', 'scss'] },
          { name: 'Html', extensions: ['html'] },
        ],
      },
    )
      .then((filePath) => {
        mainDirectory = filePath.filePaths[0];
        generateFileTree(mainDirectory);
        pathHandler(filePath.filePaths[0]);
      })
      .catch((err: any) => console.log(err));
  };

  return (
    <div>
      <button onClick={handleUploadButton}>UPLOAD</button>
      <h1>{myPath}</h1>

    </div>
  )
}

export default Landing;
