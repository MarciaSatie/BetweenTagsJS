


const logo = <img className="size-7"
src="https://firebasestorage.googleapis.com/v0/b/between-tags2.appspot.com/o/logos%2Fvscode.png?alt=media&token=2ad5aa14-0e4c-4bed-8a4d-63761e8086df"/>;



import VSCode_Snippets from "./CardContent/VSCode_Snippets"
import MainPlugins from "./CardContent/MainPlugins"


const content =[];

content.push(
  VSCode_Snippets,
  MainPlugins

  
);



content.forEach((item )=> {
  item.logo =logo;
  
});

export default content;