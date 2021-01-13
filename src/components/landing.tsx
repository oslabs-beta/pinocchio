import React, { useContext } from 'react';
import { FileContext } from '../providers/FileProvider';

const { remote } = window.require('electron');
const electronFs = remote.require('fs');
// Display native system dialogs for opening and saving files, alerting, etc.
const { dialog } = remote;

const Landing = () => {
  const { myPath, pathHandler } = useContext(FileContext);

  //returns file path of desired project folder
  const handleUploadButton = () => {
    console.log("You clicked me; dialog: ", dialog)
    // showOpenDialog is an electron method that returns a string of file path from user's local machine
    // filter the directory path a user can choose depending on file extension
    // TODO Create type reference for filePath to be an array
    // OR
    // Create type for filePath[0] to be string
    dialog.showOpenDialog(
      {
        properties: ['openDirectory', 'multiSelections'],
        message: 'Please choose a project',
        filters: [
          { name: 'Javascript Files', extensions: ['js', 'jsx'] },
          { name: 'Typescript Files', extensions: ['ts', 'tsx'] },
          { name: 'Style', extensions: ['css', 'scss'] },
          { name: 'Html', extensions: ['html'] },
        ]
      }).then(filePath => pathHandler(filePath.filePaths[0]))
    // TODO
    //console.log(filePath);
    //pathHandler(filePath);

    // invoke that context pathhandler function here
  }

  return (
    <div>
      <button onClick={handleUploadButton}>UPLOAD</button>
      <h1>{myPath}</h1>

    </div>
  )
}

export default Landing;