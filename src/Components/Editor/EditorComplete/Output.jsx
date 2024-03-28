import React, { useState } from 'react';
import { executeCode } from "../../../api";

const Output = ({ editorRef, language }) => {
    
    const [output,setOutput] = useState(null);
    const [isError,setIsError] = useState(false);//not used yet, the idea was to change the color if there is an error.
    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;
        try {
            const { run:result, error } = await executeCode({ language, sourceCode });
            setOutput(result.output.split("\n"))
            
            result.stdrr ? setIsError(true) : setIsError(false);

        } catch (error) {
            // Handle error if needed
            console.log(error);
        }
    }
 

    return (
        <div className="font-header text-lg bg-black pt-4 pl-4 pb-2 text-pink-300 font-bold">
            
            <div className="border-2 border-pink-300 min-h-20 rounded-md">
                {/* Display output or error */}
                {output ? (
                    output.map((line, index) => (
                        <div key={index}>{line}</div>
                    ))
                ) : (
                    <span>Welcome to BetweenTags!</span>
                )}
            </div>
            <br/>
            <button className="border-2 border-pink-300 p-2 mb-1 rounded-md  hover:bg-sky-700" onClick={runCode}>Run Code</button>
        </div>
    );
}

export default Output;
