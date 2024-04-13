
import AEditor from '../../../Editor/AceEditor'


const cardTitle ="Object Oriented Programing (OOP)";
const cardDate = createDate("2024-04-01");
const cardContent = CardContent();

function CardContent() {
  return (
  <>
  <a href='https://betweentags.hashnode.dev/c-basics-of-oop'>About OOP</a>
    <p>Object-oriented programming (OOP) in C# involves creating classes as blueprints (or templates) to generate new objects (instances), encapsulating data and behavior within them.</p>
    <br/>
    <p>In the code example below we are creating the class (blueprint) Person, which has methods Name, Age, and Introduce.

From this class, we will generate 2 objects, "John" and "Ana".

John and Ana are 2 new entities with the same methods, Name, Age, and Introduce.</p>
<AEditor
code ={`using System;

class Person {
    public string Name { get; set; }
    public int Age { get; set; }

    public void Introduce() {
        Console.WriteLine($"Hi, my name is {Name} and I am {Age} years old.");
    }
}
`}
   h = {"200px"} />
  <br/>
   <p>Now let's generate new Objects from class Person at Main Program:</p>

   <AEditor
      code ={`// At Main Program:
class Program {
    static void Main(string[] args) {
        // Creating objects (instances) of the Person class
        Person John= new Person();
        John.Name = "John Smith";
        John.Age = 30;

        Person person2 = new Person();
        Ana.Name = "Ana Doe";
        Ana.Age = 25;

        // Calling the Introduce method for each person
        person1.Introduce();//Output: Hi my name is John Smith, and I am 30 years old.
        person2.Introduce();//Output: Hi my name is Ane Doe, and I am 25 years old.
    }
}`}
      h = {"300px"}/>

    <details>
      <summary className='text-pink-700'>
        <strong></strong>
      </summary>
      <p></p>
      <AEditor
      code ={`Add code here`}
      h = {"100px"}/>
    </details>

    <details>
      <summary>
        <strong></strong>
      </summary>
      <p></p>
      <AEditor
      code ={`Add code here`}
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