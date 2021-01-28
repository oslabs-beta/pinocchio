import React, {useState, useEffect, useContext} from 'react';
import MonacoEditor from 'react-monaco-editor';
import { FileContext } from '../../providers/FileProvider';

// import { editor } from 'monaco-editor';
const { remote } = window.require('electron');
const electronFs = remote.require('fs');

const Monaco = () => {
  const [ grabContents, setGrabContents ] = useState('');
  const { chosenFile } = useContext(FileContext);

  useEffect(() => {
    grabFileContents(chosenFile) 
  }, [chosenFile]);

  const grabFileContents = (filePath) => {
    if (filePath.length > 0){
      setGrabContents(electronFs.readFileSync(filePath, 'utf8'));
    }
    console.log(grabContents);
  }
  // From spearmint component EditorView.jsx
  const options = {
    selectOnLineNumbers: true,
    wordWrap: 'wordWrapColumn',
    wordWrapColumn: 90,
    autoIndent: true,
    colorDecorators: true,
    wrappingIndent: 'indent',
    automaticLayout: true,
  };

  const editorDidMount = (editor) => {
    console.log('editorDidMount', editor)
    // editor.setTheme('light-dark');
    // editor.focus();
  };


  return (
    <div>
      <h1>Code Preview</h1>
      <MonacoEditor
        height="100%"
        width="33vw"
        language="javascript"
        theme="light-dark"
        editorDidMount={editorDidMount}
        options={options}
        value={grabContents}
      />
    </div>
  );
};

export default Monaco;
