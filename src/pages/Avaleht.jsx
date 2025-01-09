import joogidJSON from "../joogid.json"
import { useState } from "react"

function Avaleht() {

    // kui võtan "joogid" eest sulud ära, siis on kõik üksteise otsas.

    const [joogid] = useState (joogidJSON)

  return (
    <div>
        {joogid.map(jook => 
        <div key={jook}>{jook} </div>)}
    </div>
  )
}

// kas on vaja panna div sisse key=?

export default Avaleht