import joogidJSON from "../joogid.json"
import { Link } from "react-router-dom"


function Avaleht() {

    // kui võtan "joogid" eest sulud ära, siis on kõik üksteise otsas.

    const joogid = (joogidJSON)

  return (
    <div>Joogid:
        {joogid.map((jook,index) => 
        <div key={jook}>
          {jook}
        <Link to={"/jook/" + index}><button>vt lähemalt</button></Link>
        </div>)}
    </div>
  )
}

// kas on vaja panna div sisse key=?

export default Avaleht