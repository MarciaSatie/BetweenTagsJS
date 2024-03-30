
import AEditor from '../../../Editor/AceEditor'


const cardTitle ="Variables";
const cardDate = createDate("2024-03-28");
const cardContent = CardContent();

function CardContent() {
  return (
  <>
  <details>
    <summary className='font-extrabold text-pink-700'>About Variables</summary>
    <p>In C#, variables are used to store data temporarily in computer memory during the execution of a program. They are essential components of any programming language, including C#. A variable is essentially a named storage location in the computer's memory where you can store and manipulate data.</p>
    <p>The convention is camelCase to name the variables. </p>
    <br/>
    <details>
      <summary className='font-bold'>Declaration:</summary>
      <p>Before you can use a variable in C#, you need to declare it. This involves specifying the variable's name and its data type. For example:</p>
      <AEditor
      code ={`int age; // Declaration of an integer variable named 'age'
      `}
    />
    </details>

    <details>
      <summary className='font-bold'>Initialization</summary>
      <p>After declaring a variable, you can optionally initialize it with an initial value. Initialization assigns an initial value to the variable. </p>
      <AEditor
      code ={`int age = 30; // Initialization of the 'age' variable with the value 30
      `}
    />
    </details>


    <details>
      <summary className='font-bold'>Scope</summary>
      <p>The scope of a variable refers to the region of code where the variable is accessible. In C#, variables can have different scopes, such as local scope (limited to a specific block of code), class scope (accessible throughout a class), or global scope (accessible throughout the entire program).</p>
    </details>


    <details>
      <summary className='font-bold'>Assignment</summary>
      <p>Variables can be assigned new values during the execution of a program. </p>
      <AEditor
      code ={`age = 35; // Assigning a new value to the 'age' variable
      `}
    />
    </details>
    <br/>


  </details>
  <br/>


    <details>
      <summary className='font-extrabold text-pink-700'>
        <strong>Data Types</strong>
      </summary>

      <details>
      <summary className='font-bold'>Characters and Strings</summary>
      <ul >
      
      <li>
        <p><strong>char: </strong> Represents a single Unicode character. Enclosed in single quotes (' '). (Otherwise you will get an error.)</p>
      </li>
      <li>
        <p><strong>string: </strong> Represents a sequence of characters. Enclosed in double quotes (" ").</p>

        <details open>
          <summary className='font-bolf'> Useful String Methods:</summary>
          <ul>
          <li>
            <details>
              <summary>.Trim()</summary>
              <p>
                Will take off all the spaces in the beggining and end of the
                string
              </p>
              <div className="codeStyle">
                <pre>
                  <code>
                    string greetings= " Hello World! ";<br></br>
                    Console.WriteLine (greetings.Trim())// "Hello World!"
                  </code>
                </pre>
              </div>
            </details>
          </li>
          <li>
            <details>
              <summary>.TrimStart()</summary>
              <p>Will take off all the spaces in the beggining of the string</p>
              <div className="codeStyle">
                <pre>
                  <code>
                    string greetings= " Hello World! ";<br></br>
                    Console.WriteLine (greetings.TrimStart())// "Hello World!*"
                  </code>
                </pre>
              </div>
            </details>
          </li>

          <li>
            <details>
              <summary>.TrimEnd()</summary>
              <p>Will take off all the spaces in the end of the string</p>
              <div className="codeStyle">
                <pre>
                  <code>
                    string greetings= " Hello World! ";<br></br>
                    Console.WriteLine (greetings.TrimEnd())// "*Hello World!"
                  </code>
                </pre>
              </div>
            </details>
          </li>

          <li>
            <details>
              <summary>.Replace("str1","str2")</summary>
              <p>
                str1 - string to be replaced.<br></br>
                str2- string that will replace.
              </p>
              <div className="codeStyle">
                <pre>
                  <code>
                    string sayHello= " Hello World! ";<br></br>
                    string sayHello2 = sayHello.Replace("World", "Moon");
                    <br></br>
                    <br></br>
                    Console.WriteLine(sayHello2); // Hello Moon!
                    <br></br>
                    Console.WriteLine(sayHello) // Hello World!
                  </code>
                </pre>
              </div>
            </details>
          </li>

          <li>
            <details>
              <summary>.Length</summary>

              <div className="codeStyle">
                <pre>
                  <code>
                    string sayHello= "Hello World!";<br></br>
                    Console.WriteLine(sayHello.Length); // 12
                  </code>
                </pre>
              </div>
            </details>
          </li>

          <li>
            <details>
              <summary>.ToUpper()</summary>
              <div className="codeStyle">
                <pre>
                  <code>
                    string fullName = "Taylor Swift";<br></br>
                    Console.WriteLine(fullName.ToUpper());//TAYLOR SWIFT
                    <br></br>
                    Console.WriteLine(fullName);//Taylor Swift
                  </code>
                </pre>
              </div>
            </details>
          </li>

          <li>
            <details>
              <summary>.ToLower()</summary>

              <div className="codeStyle">
                <pre>
                  <code>
                    string fullName = "Taylor Swift";<br></br>
                    Console.WriteLine(fullName.ToLower());//taylor swift
                    <br></br>
                    Console.WriteLine(fullName);//Taylor Swift
                  </code>
                </pre>
              </div>
            </details>
          </li>

          <li>
            <details>
              <summary>.Contains()</summary>
              <p>Returns True or False.</p>
              <div className="codeStyle">
                <pre>
                  <code>
                    string songLyrics = "You say goodbye, and I say hello";
                    <br></br>
                    <br></br>
                    Console.WriteLine(songLyrics.Contains("goodbye")); //True
                    <br></br>
                    Console.WriteLine(songLyrics.Contains("greetings")); //False
                  </code>
                </pre>
              </div>
            </details>
          </li>

          <li>
            <details>
              <summary>.StartsWith() .EndsWith()</summary>
              <p>Returns True or False.</p>
              <div className="codeStyle">
                <pre>
                  <code>
                    string songLyrics = "You say goodbye, and I say hello";
                    <br></br>
                    <br></br>
                    Console.WriteLine(songLyrics.StartsWith("You")); //True
                    <br></br>
                    Console.WriteLine(songLyrics.EndsWith("say")); //False
                  </code>
                </pre>
              </div>
            </details>
          </li>
        </ul>

        </details>
      
      </li>
      
    </ul>
      <AEditor
      code ={`Add code here`}
    />
    </details>



      
    </details>

    <ol >
      <li></li>
    </ol>

    <ul >
      <li></li>
    </ul>
    <br />

    <details>
      <summary className='font-bold'></summary>
      <p></p>
      <AEditor
      code ={`Add code here`}
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