import MonacoEditor from "react-monaco-editor";
import { editor } from "monaco-editor";
import React from "react";



function Editor() {

    const monacoEditorCreate = monaco.editor.create(document.getElementById("container"), {
        value: 'console.log("Hello, world")',
        language: 'javascript'
      });

    const editorDidMount = () => {
        editor.setTheme('light-dark');
        // editor.focus();
      };

    return(
        <div>
            <MonacoEditor 
                height='100vh'
                language='javascript'
                theme='light-dark'
                editorDidMount={editorDidMount}
                monacoEditorCreate={monacoEditorCreate}
            />
        </div>
    )
}




export default Editor;