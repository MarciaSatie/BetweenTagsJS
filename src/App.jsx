import Header from './Components/Header'
import EditorOutput from './Components/Editor/EditorComplete/EditorOutput';
import CardsGroup from './Components/Cards/CardGroup'
import CardSearch from "./Components/Cards/CardGroupSearch/CardsGroupSearch"

import contentReact from "./Components/Content/React/Content"
import contentVSCode from "./Components/Content/VSCode/Content"
import contentCSharp from "./Components/Content/CSharp/Content"

import { FaReact } from "react-icons/fa";


function App() {

  let listAll = [...contentCSharp,...contentVSCode,...contentReact];

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
      title ={"React"}
      contentList ={contentReact}
    />

    <CardsGroup
      title ={"VS Code"}
      contentList ={contentVSCode}
    />

    </>
  )
}

export default App
