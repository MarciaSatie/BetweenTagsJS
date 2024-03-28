
import { FaReact } from "react-icons/fa";

const logo = <FaReact size={30} style={{
  color: "#00ccff",

}}/>


import CreateNewProject from "./CardContent/CreateNewProject"


const content =[];

content.push(
  CreateNewProject,

  
);



content.forEach((item )=> {
  item.logo =logo;
  
});

export default content;