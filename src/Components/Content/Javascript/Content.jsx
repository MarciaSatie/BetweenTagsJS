const logo = <img className="size-7"
src="https://firebasestorage.googleapis.com/v0/b/between-tags2.appspot.com/o/logos%2Fjs.png?alt=media&token=fda3b084-e417-476b-bb57-9002df68d77b"/>

import ConsoleInteraction from "./CardContent/ConsoleInteraction"


const content =[];

content.push(
  ConsoleInteraction,

  
);



content.forEach((item )=> {
  item.logo =logo;
  
});

export default content;