import Header from './Components/Header'
import MEditor from './Components/Editor/MEditor'
import CardsGroup from './Components/Cards/CardGroup'
import contentReact from "./Components/Content/React/Content"

import { FaReact } from "react-icons/fa";


function App() {


  return (
    <>
    
    <Header/>
    <MEditor/>

    <CardsGroup
      title ={"React"}
      contentList ={contentReact}
    />

    </>
  )
}

export default App
