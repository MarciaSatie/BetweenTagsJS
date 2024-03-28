
import AEditor from './../../../Editor/AceEditor'


const cardTitle ="React VS Code Snippets";
const cardDate = createDate("2024-03-28");
const cardContent = CardContent();



function CardContent() {
  return (
  <>
  <p>At VS Code, add the extension:<strong>ES7 React/Redux/React-Native/JS snippets</strong></p>
  <br/>
    <details>
      <summary>
        <strong>rfc</strong>
      </summary>
      <p>React functional component</p>
      <AEditor
      code ={`import React from 'react'

export default function FileName() {
  return (
    <div>FileName</div>
  )
}
      
     `}
    />
    </details>

    <details>
      <summary className='text-pink-700'>
        <strong>rfce</strong>
      </summary>
      <p>React functional component w/ export default at the bottom</p>
      <AEditor
      code ={`import React from 'react'

function FileName() {
  return (
    <div>FileName</div>
  )
}
      
      export default FileName`}
    />
    </details>

    <details>
      <summary>
        <strong>rafce</strong>
      </summary>
      <p>React component utilizing an arrow function</p>
      <AEditor
      code ={`import React from 'react'

const FileName = ()=> {
  return (
    <div>FileName</div>
  )
}
      
      export default FileName`}
    />
    </details>

    <details>
      <summary className='text-pink-700'>
        <strong>nfn</strong>
      </summary>
      <p>Arrow Function</p>
      <AEditor
      code ={`const name = (params)=> {}
      `}
    />
    </details>

    <details>
      <summary>
        <strong>imd</strong>
      </summary>
      <p>Import destructured</p>
      <AEditor
      code ={`import { } from 1'module'
      `}
    />
    </details>

    <details>
      <summary className='text-pink-700'>
        <strong>clg</strong>
      </summary>
      <p>Console Log</p>
      <AEditor
      code ={`console.log(object);
      `}
    />
    </details>




  </>
    
  )
}

// adding information to a Map
const NewCard = new Map();
NewCard.set ("title",cardTitle);
NewCard.set ("date", cardDate);
NewCard.set ("cardContent",cardContent);
NewCard.set ("key",GenerateKey())

const cardObj = convertMapToObj(NewCard);
export default cardObj;



//////////////////////Functions //////////////////////////////////////////
function GenerateKey(){
    const nameKey = cardTitle.replace(/\s+/g, ''); // Removes all whitespace
    const keyAssemble = nameKey + Math.random().toString(36);
    return keyAssemble;
}

function createDate(dateImput){
    const x = new Date (dateImput);

    const month = x.toLocaleString("en-US",{month:"long"});
    const day = x.toLocaleString("en-US",{day:"2-digit"});
    const year = x.getFullYear();

    return day+" "+month+" "+year;
}

function convertMapToObj(map) {
    const obj = {};
    for (let [key, value] of map) {
        obj[key] = value;
    }
    return obj;
}