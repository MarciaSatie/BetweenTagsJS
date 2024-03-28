import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { useRef, useState } from "react";


import React from 'react'

export default function MEditor() {

    const language ="javascript";
    const code =`console.log("I like icecream.")`;

    const editorRef =useRef();
    const [value,setValue] = useState(code);
    const onMount= (editor)=>{
      editorRef.current = editor;
      editor.focus();
    };

  return (
    <div>



      {/* Monaco Editor */}
      <Editor
          height="300px"
          theme="vs-dark"
         
          defaultLanguage={language}
          onMount={onMount}
          value={value}

          onChange={(value) => {
            if (typeof value === 'string') {
              setValue(value);
            }
          }}
          options={{
            inlineSuggest: true,
            fontSize: "16px",
            formatOnType: true,
            autoClosingBrackets: true,
            minimap: { scale: 20}
          }}
          />
    </div>
  )
}
