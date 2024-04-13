const logo = <img className="size-7"
src="https://firebasestorage.googleapis.com/v0/b/between-tags2.appspot.com/o/logos%2FCSharp.png?alt=media&token=d7eb637f-fad0-49b3-9a5e-a445ace4421a"/>;



import Card1 from "./CardContent/Card1";
import Variables from "./CardContent/Variables"
import OOP from "./CardContent/OOP"
import Classes from "./CardContent/Classes"

const content =[];

content.push(
  Card1,
  Variables,
  OOP,
  Classes,
  

  
);



content.forEach((item )=> {
  item.logo =logo;
  
});

export default content;