import { useState } from "react"
import joogidJSON from "../joogid.json"



function HaldaJooke() {

    const [joogid, uuendaJoogid] = useState (joogidJSON)


    const kustuta = (index) =>{
        joogidJSON.splice(index,1)
        uuendaJoogid(joogidJSON.slice())
    }

  return (
    <div>Joogid:
        {joogid.map((element,index) =>
        <div key={element}>{element}
        <button onClick={() => kustuta (index)}>X</button>
        </div>
    )}

    </div>
  )
}

export default HaldaJooke