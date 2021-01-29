import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../assets/stylesheets/styled-components/Global";
import { FileContext } from "../../providers/FileProvider";
import { fileInterface } from "../../utils/fileTypes";

const { remote } = window.require("electron");
const electronFs = remote.require("fs");

//  STYLES
import "./FileDirectory.scss";

const FileDirectory = () => {
  const { myPath, fileTree, chosenFileHandler } = useContext(FileContext);
  const [isFolderOpen, setFolderOpen] = useState({});
  const folderOpenObj = {};

  // grabbing the file contents and logging it to the console
  // const grabFileContents = (filePath) => {
  //   const fileContents = electronFs.readFileSync(filePath, 'utf8');
  //   console.log(fileContents);
  // }

  // grabFileContents needs to be a use effect once clicked

  const toggleOpenFolder = (fileName: string) => {
    if (isFolderOpen[fileName]) {
      setFolderOpen({ ...isFolderOpen, [fileName]: false });
    } else setFolderOpen({ ...isFolderOpen, [fileName]: true });
  };

  const idx: number = myPath.lastIndexOf("/"); // TODO: will this work for pc?
  const projectName: string = myPath.substring(idx + 1);

  const renderFileTree = (tree: Array<fileInterface>) =>
    tree.map((file) => {
      // check to see if file is a directory
      // console.log('in render file tree')
      // if file.files.length is truthy -> it's a folder
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
              {file.fileName}
            </button>
          </li>
        </ul>
      );
    });

  useEffect(() => {
    // console.log('in use effect');
    setFolderOpen(folderOpenObj);
  }, []);

  return (
    <div id="fileTreeCont">
      {fileTree.length ? (
        <>
          <Header id="fileName">{projectName}</Header>
          <section id='treeCont'>
          {renderFileTree(fileTree)}
          </section>
        </>
      ) : (
        <Header>No Files Uploaded</Header>
      )}
    </div>
  );
};

export default FileDirectory;
