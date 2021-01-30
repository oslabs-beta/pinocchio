import React, { useState, useEffect, useContext } from "react";
import MonacoEditor from "react-monaco-editor";
import { Header } from "../../assets/stylesheets/styled-components/Global";
import { FileContext } from "../../providers/FileProvider";

// import { editor } from 'monaco-editor';
const { remote } = window.require("electron");
const electronFs = remote.require("fs");

// STYLES
import "./Monaco.scss";

const Monaco = () => {
  const [grabContents, setGrabContents] = useState("");
  const { chosenFile } = useContext(FileContext);

  useEffect(() => {
    grabFileContents(chosenFile);
  }, [chosenFile]);

  const grabFileContents = (filePath) => {
    if (filePath.length > 0) {
      setGrabContents(electronFs.readFileSync(filePath, "utf8"));
    }
    console.log(grabContents);
  };
  // From spearmint component EditorView.jsx
  const options = {
    // selectOnLineNumbers: true,
    // // allows min vw of wrapped code in editor
    wordWrap: "bounded",
    // // wordWrapColumn: 90,
    // autoIndent: true,
    // colorDecorators: true,
    // wrappingIndent: "indent",
    // // should automatically resize between toggle of file tree,
    // // is not working as intended
    // automaticLayout: true,
    // // right side minimap disabled
    minimap: { enabled: false },
    selectOnLineNumbers: true,
    // wordWrap: "wordWrapColumn",
    // wordWrapColumn: 90,
    autoIndent: true,
    colorDecorators: true,
    wrappingIndent: "indent",
    automaticLayout: true,
  };

  const editorDidMount = (editor) => {
    console.log("editorDidMount", editor);
    
  };

  return (
    <div id="monacoCont">
      <Header id='headerME'>Code Preview</Header>
      <MonacoEditor
        height="70vh"
        // bug with toggling filetree, flex grow works, but
        // after retoggling tree back to dom, flew shrink does not work
        // and monaco keeps the 50% flex width from only two child elements in flex
        // width="30%"
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
