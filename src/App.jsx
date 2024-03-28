import Header from './Components/Header'
import EditorOutput from './Components/Editor/EditorComplete/EditorOutput';
import CardsGroup from './Components/Cards/CardGroup'
import contentReact from "./Components/Content/React/Content"

import { FaReact } from "react-icons/fa";


function App() {


  return (
    <>
    
    <Header/>
    <EditorOutput/>
    
    <CardsGroup
      title ={"React"}
      contentList ={contentReact}
    />

    </>
  )
}

export default App
