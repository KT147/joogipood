import { Route, Routes, Link } from "react-router-dom"
import './App.css'
import Avaleht from "./pages/Avaleht"
import LisaJook from "./pages/LisaJook"
import HaldaJooke from "./pages/HaldaJooke"
import Muutujad from "./pages/Muutujad"
import MuutujadTeine from "./pages/MuutujadTeine"

function App() {


  return (
    <>

    <Link to="/"><button>Avalehele</button></Link>
    <Link to="/lisa"><button>Lisa jooke</button></Link>
    <Link to="/halda"><button>Halda jooke</button></Link>
    <Link to="/muutujad"><button>Muutujad</button></Link>
    <Link to="/muutujadteine"><button>Muutujad 2</button></Link>


    <Routes>
      <Route path= "/" element={<Avaleht/>}/>
      <Route path= "/lisa" element= {<LisaJook/>}/>
      <Route path= "/halda" element= {<HaldaJooke/>}/>
      <Route path= "/muutujad" element= {<Muutujad/>}/>
      <Route path= "/muutujadteine" element= {<MuutujadTeine/>}/>
    </Routes>
      
    </>
  )
}

export default App
