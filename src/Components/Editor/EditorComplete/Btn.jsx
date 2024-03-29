import React from 'react'

export default function Btn(props) {
  return (
    <div>
        <button className=" font-header text-pink-500 border-2 border-pink-300 p-2 mb-1 rounded-md  hover:bg-sky-700" 
        onClick={props.runCode}
        >
            {props.name}
        </button>
    </div>
  )
}
