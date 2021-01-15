import React, { useContext, useState } from 'react';
import { FileContext } from '../providers/FileProvider';
import { fileInterface } from '../utils/fileTypes';

const { remote } = window.require('electron');
const electronFs = remote.require('fs');

const FileDirectory = () => {
  const { myPath, fileTree, fileTreeHandler } = useContext(FileContext);

  const idx: number = myPath.lastIndexOf('/');
  const projectName: string = myPath.substring(idx + 1);

  const renderFileTree = (tree: Array<fileInterface>) => tree.map((file) => { //map undefined!!
    if (file.files.length) {
      return (
        <ul key={file.fileName}>
          <li>
            <button type="button">
              {file.fileName}
            </button>
          </li>
        </ul>
      );
    }
  });

  return (
    <div>
      {renderFileTree(fileTree)}
    </div>
  );
};

export default FileDirectory;
