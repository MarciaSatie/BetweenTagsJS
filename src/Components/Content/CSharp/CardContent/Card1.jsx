
import AEditor from './../../../Editor/AceEditor'


const cardTitle ="Console Interactions";
const cardDate = createDate("2024-03-28");
const cardContent = CardContent();

function CardContent() {
  return (
  <>
{/* <AEditor
      code ={`Add code here`}
    /> */}

    <details>
      <summary className='text-pink-700'>
        <strong>Console.ReadLine()</strong>
      </summary>
      <p>Reads user input from the Console, returning a String</p>
      <AEditor
      code ={`Console.WriteLine("Enter your name:");
string name = Console.ReadLine(); // Will read user input (example: Joe) and storage in the variable name.
Console.WriteLine("Hello, " + name + "!");//Output: Hello, Joe!`}
    />
    </details>

    <details>
      <summary>
        <strong>Console.WriteLine() and Console.Write()</strong>
      </summary>
      <p>Displays output to the Console</p>
      <p>The difference between both is: Console.WriteLine will skip to the next line, while Console.Write will print the messaege in the same line.</p>
      <p>Snippets for Console.WriteLine is: <strong>cw (press tab 2x)</strong> </p>
      <AEditor
      code ={`Console.WriteLine("Hello, World!");`}
    />
    </details>


    <details>
      <summary className='text-pink-700'>
        <strong>String Interpolation</strong>
      </summary>
      <p>In C#, string interpolation is achieved by prefixing a string literal with the $ symbol. Within the string, you can embed expressions by wrapping them in curly braces {}.</p>
      <AEditor
      code ={`string name = "John";
int age = 30;
Console.WriteLine($"My name is {name} and I am {age} years old.");
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