import React from 'react'

export default function CardGroup(props) {
    const content = [...props.contentList];
    const groupLogo = content[0]?.logo;
  return (
    <>
    <div className= "relative z-0 shadow-lg p-4 mt-4 mb-4 rounded-3xl max-h-[350px] text-left ">
        <div className="bg-pink-500 mt-9 flex pl-2 p-2 rounded-md">
            {groupLogo}
            <h1 className="font-mono font-bold text-xl pl-4 text-white ">{props.title}</h1>
        </div>
        blabla
    </div>
    
    </>
  )
}
