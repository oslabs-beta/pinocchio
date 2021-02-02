/* eslint-disable import/no-unresolved */ // * Be careful
// eslint-disable-next-line no-use-before-define
import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../../assets/stylesheets/styled-components/Global';
// GLOBAL STATE HANDLERS
import { FileContext } from '../../providers/FileProvider';
import { fileInterface } from '../../utils/fileTypes';
//  STYLES
import './FileDirectory.scss';

// Render file tree of uploaded directory on homepage
const FileDirectory = () => {
  const { myPath, fileTree, chosenFileHandler }: any = useContext(FileContext);

  // Used with useEffect to update opened and closed folders after first render
  const initialState: {[key: string]: boolean} = {};
  const [isFolderOpen, setFolderOpen] = useState(initialState);

  // Keeps track of opened closed folders upon first render
  const folderOpenObj: {[key: string]: boolean} = {};

  // handler to toggle whether a folder is opened or closed
  const toggleOpenFolder = (fileName: string): void => {
    if (isFolderOpen[fileName]) {
      setFolderOpen({ ...isFolderOpen, [fileName]: false });
    } else setFolderOpen({ ...isFolderOpen, [fileName]: true });
  };

  useEffect(() => {
    setFolderOpen(folderOpenObj);
  }, []);

  // Extract name of file directory/project
  const idx: number = myPath.lastIndexOf('/');
  const projectName: string = myPath.substring(idx + 1);

  // Recursively create a file tree from uploaded file directory
  const renderFileTree = (tree: Array<fileInterface>) => tree.map((file: fileInterface) => {
    // If current element being mapped over is a folder, do the following...
    if (file.files.length) {
      folderOpenObj[file.fileName] = false;
      return (
        <ul key={file.fileName}>
          <li>
            <button
              id="filesButtonFolder"
              type="button"
              onClick={() => toggleOpenFolder(file.fileName)}
            >
              {file.fileName}
            </button>
          </li>
          {isFolderOpen[file.fileName] && renderFileTree(file.files)}
        </ul>
      );
    }
    // If current element being mapped over is a file, do the following...
    return (
      <ul key={file.filePath}>
        <li>
          <button
            id="filesButtonFile"
            type="button"
            onClick={() => {
              chosenFileHandler(file.filePath);
            }}
          >
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            - {file.fileName}
          </button>
        </li>
      </ul>
    );
  });

  // If a directory has been uploaded, display the file tree, otherwise display 'No Files Uploaded'
  return (
    <div id="fileTreeMainCont">
      {fileTree.length ? (
        <>
          <Header id="fileName">{projectName}</Header>
          <section id="fileTreeCont">{renderFileTree(fileTree)}</section>
        </>
      ) : (
        <Header>No Files Uploaded</Header>
      )}
    </div>
  );
};

export default FileDirectory;
