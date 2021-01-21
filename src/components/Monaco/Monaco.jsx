import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor';
// import { editor } from 'monaco-editor';

const Monaco = () => {
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
      <h1>Monaco is below me</h1>
      <MonacoEditor
        height="100vh"
        language="javascript"
        theme="light-dark"
        editorDidMount={editorDidMount}
        options={options}
      />
    </div>
  );
};

export default Monaco;
