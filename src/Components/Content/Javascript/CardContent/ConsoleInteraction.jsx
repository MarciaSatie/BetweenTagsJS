
import AEditor from '../../../Editor/AceEditor'


const cardTitle ="Console interactions";
const cardDate = createDate("2024-03-28");
const cardContent = CardContent();

function CardContent() {
  return (
  <>
<AEditor
      code ={`Add code here`}
    />

    <details>
      <summary className='text-pink-700'>
        <strong>Console.log</strong>
      </summary>
      <p></p>
    </details>


    <details>
      <summary className='text-pink-700'>
        <strong>String Interpolation</strong>
      </summary>
      <p></p>
      <AEditor
      code ={`let name = "John";
let age = 30;
console.log(\`My name is \${name} and I am \${age} years old.\`);
`}
    />
    </details>

    <ol >
      <li></li>
    </ol>

    <ul >
      <li></li>
    </ul>
    <br />


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