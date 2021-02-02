// REACT LIBRARIES
// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect, useContext } from 'react';
import MonacoEditor from 'react-monaco-editor';
// GLOBAL STATE PROVIDER
import { FileContext } from '../../providers/FileProvider';
// STYLES
import { Header } from '../../assets/stylesheets/styled-components/Global';
import './Monaco.scss';

const { remote } = window.require('electron');
const electronFs = remote.require('fs');

const Monaco = () => {
  const [grabContents, setGrabContents] = useState('');
  const { chosenFile, fileTree }: any = useContext(FileContext);
  const grabFileContents = (filePath: string) => {
    if (filePath.length > 0) {
      setGrabContents(electronFs.readFileSync(filePath, 'utf8'));
    }
  };

  useEffect(() => {
    grabFileContents(chosenFile);
  }, [chosenFile, fileTree]);

  // From spearmint component EditorView.jsx
  const options: any = {
    wordWrap: 'bounded',
    minimap: { enabled: false },
    selectOnLineNumbers: true,
    autoIndent: true,
    colorDecorators: true,
    wrappingIndent: 'indent',
    automaticLayout: true,
    lineDecorationsWidth: '1px',
    lineNumbersMinChars: 3,
  };

  return (
    <div id="monacoCont">
      <Header id="headerME">Code Preview</Header>
      <div id="testME">
        <MonacoEditor
          height="74vh"
          // id="testME"
          // bug with toggling filetree, flex grow works, but
          // after retoggling tree back to dom, flew shrink does not work
          // and monaco keeps the 50% flex width from only two child elements in flex
          // width="30%"
          language="javascript"
          theme="light-dark"
          options={options}
          value={grabContents}
        />
      </div>
    </div>
  );
};

export default Monaco;
