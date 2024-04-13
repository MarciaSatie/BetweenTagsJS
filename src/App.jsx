import Header from './Components/Header'
import EditorOutput from './Components/Editor/EditorComplete/EditorOutput';
import CardsGroup from './Components/Cards/CardGroup'
import CardSearch from "./Components/Cards/CardGroupSearch/CardsGroupSearch"

import contentReact from "./Components/Content/React/Content"
import contentVSCode from "./Components/Content/VSCode/Content"
import contentCSharp from "./Components/Content/CSharp/Content"
import contentJS from "./Components/Content/Javascript/Content"
import contentPS from "./Components/Content/Powershell/Content"

import { FaReact } from "react-icons/fa";


function App() {

  let listAll = [...contentCSharp,...contentVSCode,...contentReact,...contentJS,...contentPS];

  return (
    <>
    
    <Header/>
    <EditorOutput/>
    
    <CardSearch
    contentList ={listAll}
    />

    <CardsGroup
      title ={"C#"}
      contentList ={contentCSharp}
    />

    <CardsGroup
      title ={"Javascript"}
      contentList ={contentJS}
    />

    <CardsGroup
      title ={"React"}
      contentList ={contentReact}
    />

    <CardsGroup
      title ={"VS Code"}
      contentList ={contentVSCode}
    />


    <CardsGroup
      title ={"Powershell"}
      contentList ={contentPS}
    />

    </>
  )
}

export default App
