import { useState } from "react"
import explorer from "./data/FolderData"
import Folder from "./components/Folder";

function App() {
  
  const [explorerData,setexplorerData] = useState(explorer)
  console.log(explorerData);
  
 
  return (
    <>
      <Folder explorer={explorerData}/>
    </>
  )
}

export default App
