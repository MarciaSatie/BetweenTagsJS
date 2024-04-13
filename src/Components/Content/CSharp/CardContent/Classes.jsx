
import AEditor from '../../../Editor/AceEditor'


const cardTitle ="Classes";
const cardDate = createDate("2024-03-28");
const cardContent = CardContent();

function CardContent() {
  return (
  <>
  <a href='https://betweentags.hashnode.dev/c-basics-classes'>About Classes</a>
  <p>In C#, classes are fundamental building blocks of object-oriented programming (OOP). They provide a way to model real-world entities (blueprints from real-life objects), encapsulating both data (attributes) and behavior (methods) into a single unit. Here's an overview of classes in C#:</p>
 
  <details>
      <summary className='text-pink-700'>
        <strong>Definition:</strong>
      </summary>
      <p>A class is defined using the <strong>class</strong> keyword followed by the class name. It encapsulates data members and methods within curly braces <strong>{}</strong>.</p>
      <AEditor
code ={`
public class MyClass
{
    // data members (fields)
    private int myField;

    // methods
    public void MyMethod()
    {
        // method body
    }
}
      `}
      h = {"250px"}/>
    </details>

    <details>
      <summary >
        <strong> New Objects (Instances) from Classes:</strong>
      </summary>
      <p>Once a class is defined, you can create objects (instances) of that class using the <strong>new</strong> keyword.</p>
      <AEditor
      code ={`MyClass obj = new MyObj();
      `}
      h = {"50px"}/>
    </details>


    <details>
      <summary className='text-pink-700'>
        <strong>Access Modifiers:</strong>
      </summary>
      <p>You can specify the accessibility of classes, members, and methods using access modifiers like <strong>public</strong>, <strong>private</strong>, protected, internal, etc.</p>
      <AEditor
      code ={`
public class MyClass
{
    private int myField; // private field
    public void MyMethod() // public method
    {
        // method body
    }
}
      `}
      h = {"200px"}/>
    </details>


    <details>
      <summary>
        <strong>Fields (Data Members):</strong>
      </summary>
      <p>These are variables that belong to a class and hold data. They represent the state of an object.</p>
      <AEditor
      code ={`
      public class MyClass
      {
          private int myField; // Field
      }
      `}
      h = {"200px"}/>
    </details>


    <details>
      <summary className='text-pink-700'>
        <strong>Properties:</strong>
      </summary>
      <p>Properties provide a flexible mechanism to read, write, or compute the value of a private field. They are declared like fields but can have logic in their accessors.</p>
      <AEditor
      code ={`
public class MyClass
{
    private int myField; // private field

    public int MyProperty // Property
    {
        get { return myField; }
        set { myField = value; }
    }
}
`}
      h = {"250px"}/>
    </details>

    <details>
      <summary>
        <strong>Methods (Member Functions):</strong>
      </summary>
      <p>These are functions defined within a class that define its behavior. They can manipulate the state of the object.</p>
      <AEditor
      code ={`
public class MyClass
{
    public void MyMethod() // Method
    {
        // method body
    }
}
`}
      h = {"250px"}/>
    </details>

    <details>
      <summary className='text-pink-700'>
        <strong>Constructors: </strong>
      </summary>
      <ol>
        <li><strong>ctor (press tab 2x)</strong> is the snippet to create a Constructor automatically.</li>
        <li>Constructors are special methods that are invoked when an object is created.</li>
        <li><strong>They initialize the object</strong>'s state and perform any necessary setup tasks, it will be the first method read in the class.</li>
        <li>They have to have <strong>same name as the class</strong>.</li>
        <li><strong>Don't have a return type</strong>, not even void.</li>
        <li>Cotructors don't need to be declared. If it's not declared, C# will create it automatically underneath the code.</li>
        <li>
        <details>
      <summary>
        <strong>You can have more than 1 Constructor in the class:</strong>
      </summary>
      <p> You can create more than 1 Constructor for each of them receiving more atributes </p>
      <AEditor
      code ={`using System;

public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }

    // Constructor with no parameters:
    public Person()
    {
        Name = "Unknown";
        Age = 0;
    }

    // Constructor with name parameter
    public Person(string name)
    {
        Name = name;
        Age = 0; // Default age
    }

    // Constructor with name and age parameters
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }

    public void DisplayInfo()
    {
        Console.WriteLine($"Name: {Name}, Age: {Age}");
    }
}
`}
      h = {"500px"}/>
      <br/>
      <p>Depending the numbers of parameters added when you create a new Object, this will call a different Constructors.</p>
      <br/>
      <p>Let's create new Objects initializing different Constructors:	</p>
          <AEditor
      code ={`
//Calling a Constructor with NO Parameters:
Person person1 = new Person();
person1.DisplayInfo();  // Output: Name: Unknown, Age: 0

//Calling a Constructor with just NAME Parameter:
Person person2 = new Person("John");
person2.DisplayInfo();  // Output: Name: John, Age: 0

//Calling a Constructor with NAME and AGE Paramenters:
Person person3 = new Person("Alice", 25);
person3.DisplayInfo();  
// Output: Name: Alice, Age: 25.
                
      `}
      h = {"300px"}/>
    </details>
    <br/>
        </li>
      </ol>

      <AEditor
      code ={`
public class MyClass
{
    public MyClass() // Constructor, have the same name as the class
    {
        // initialization code
    }
}
`}
h = {"200px"}/>
    </details>

    <details>
      <summary>
        <strong>Inheritance:</strong>
      </summary>
      <p>Classes can inherit fields and methods from another class. This promotes code reuse and supports hierarchical relationships between classes.</p>
      <AEditor
      code ={`
public class MyBaseClass
{
    // members
}

public class MyDerivedClass : MyBaseClass
{
    // members
}
`}
      h = {"200px"}/>
      <br/>
      <p>Creating a new Object from Inherited Classe: </p>
      <AEditor
      code ={`
MyDerivedClass newObj = new MyDerivedClass()
      `}
      h = {"50px"}/>

<details>
      <summary>
        <strong>Inheriting Constructors:</strong>
      </summary>
      <p><strong>Constructors are not directly inherited</strong> by derived classes, but you can call the base class constructor using the base() keyword within the derived class constructor.</p>
      <AEditor
      code ={`
public class Animal
{
    public Animal(string species)
    {
        Console.WriteLine($"Animal of species {species} created.");
    }
}

public class Dog : Animal
{
    public Dog(string species, string breed) : base(species)
    {
        Console.WriteLine($"Dog of species {species} and breed {breed} created.");
    }
}
`}
      h = {"300px"}/>
      <p>In the Dog class constructor, <strong>base(species)</strong> calls the constructor of the Animal class, passing the species parameter to it. This ensures that the initialization logic of the parent class is executed when creating a Dog object.</p>
    </details>

    </details>

    
    <details>
      <summary className='text-pink-700'>
        <strong>Encapsulation:</strong>
      </summary>
      <p>Classes enable encapsulation, which means bundling data and methods that operate on the data into a single unit. This helps in hiding the internal state and only exposing necessary functionality.</p>

    </details>
    
    <details>
      <summary>
        <strong>Abstraction:</strong>
      </summary>
      <p>Classes support abstraction by allowing you to define interfaces (abstract classes or interfaces) that specify a contract for what derived classes must implement.</p>
      <AEditor
      code ={`Add code here`}
      h = {"100px"}/>
    </details>

    
    <details>
      <summary className='text-pink-700'>
        <strong>Polymorphism:</strong>
      </summary>
      <p>Polymorphism allows methods to be defined in multiple classes with the same name but different implementations. This enables a single interface to be used to represent different underlying forms.</p>
      <AEditor
      code ={`Add code here`}
      h = {"100px"}/>
    </details>
    <AEditor
      code ={`using System;

// Base class
public class Animal
{
    // Field
    private string species;

    // Property
    public string Species
    {
        get { return species; }
        set { species = value; }
    }

    // Constructor
    public Animal(string species)
    {
        this.species = species;
    }

    // Method
    public void Eat()
    {
        Console.WriteLine($"{Species} is eating.");
    }
}

// Derived class inheriting from Animal
public class Dog : Animal
{
    // Additional field
    private string breed;

    // Additional property
    public string Breed
    {
        get { return breed; }
        set { breed = value; }
    }

    // Constructor
    public Dog(string species, string breed) : base(species)
    {
        this.breed = breed;
    }

    // Additional method
    public void Bark()
    {
        Console.WriteLine($"{Species} of breed {Breed} is barking.");
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Creating an object of the derived class
        Dog dog1 = new Dog("Dog", "Labrador");

        // Accessing properties and method of the base class
        Console.WriteLine($"Species: {dog1.Species}, Breed: {dog1.Breed}");
        dog1.Eat();

        // Accessing method of the derived class
        dog1.Bark();
    }
}
      `}
      h = {"800px"}/>

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