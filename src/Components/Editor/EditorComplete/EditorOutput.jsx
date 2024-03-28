import LanguagerSelector from './LanguagerSelector'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { useRef, useState } from "react";
import { CodeSnippets } from "./LanguageOptions";
import Output from './Output';


import React from 'react'

export default function EditorOutput() {


    
    const editorRef =useRef();
    const [value,setValue] = useState(CodeSnippets["javascript"]);
    const [language,setLanguage] =useState ("javascript");

    const onMount= (editor)=>{
      editorRef.current = editor;
      editor.focus();
    };

    const onSelect = (language) => { 
        setLanguage(language); 
        console.log(`Playgroung laguage is:${language}`);
        setValue(CodeSnippets[language] )
    }

  return (
    <div>
        <div>
            <Output
                 editorRef ={editorRef}
                 language={language}
            />
        </div>
        <div>
            <LanguagerSelector
                language ={language}
                onSelect={onSelect}
            />
        </div>


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
