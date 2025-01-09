import { Route, Routes, Link } from "react-router-dom"
import './App.css'
import Avaleht from "./pages/Avaleht"
import LisaJook from "./pages/LisaJook"
import HaldaJooke from "./pages/HaldaJooke"

function App() {


  return (
    <>

    <Link to="/"><button>Avalehele</button></Link>
    <Link to="/lisa"><button>Lisa jooke</button></Link>
    <Link to="/halda"><button>Halda jooke</button></Link>


    <Routes>
      <Route path= "/" element={<Avaleht/>}/>
      <Route path= "/lisa" element= {<LisaJook/>}/>
      <Route path= "/halda" element= {<HaldaJooke/>}/>
    </Routes>
      
    </>
  )
}

export default App
