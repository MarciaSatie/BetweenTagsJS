import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { useState } from "react";


import React from 'react'

export default function MEditor() {

    const language ="javascript";
    const code =`console.log("I like icecream.")`;

    const [value,setValue] = useState(code);

  return (
    <div>
              {/* Monaco Editor */}
      <Editor
          height="300px"
          theme="vs-dark"
         
          language={language}
          value={code}
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
