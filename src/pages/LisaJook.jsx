import { useState, useRef } from "react"
import joogidJSON from "../joogid.json"


function LisaJook() {

    //kas react+vite ei käsi const [joogid, uuendaJoogid] = useState (joogidJSON)  ja uuendaJoogid(joogid.slice()) maha võtta?

    const [joogid, uuendaJoogid] = useState (joogidJSON)

    const joogidRef = useRef()

    const [sonum, setSonum] = useState ()
    
    const lisaJook = () => {
        joogidJSON.push(joogidRef.current.value)
        uuendaJoogid(joogid.slice())
        joogidRef.current.value = ""

    }

    const lisaJookSonumiga = () => {
        if (joogidRef.current.value === "") {
            setSonum("Kirjuta midagi enne!")
    } else {
        setSonum("Polnudki nii raske? Jook lisatud!");
        lisaJook()
    }}

  return (
    <div>
          <label>Sisesta uus jook:</label> <br />
        <input ref={joogidRef} type="text"/><br />
        <button onClick={lisaJookSonumiga}>Sisesta</button> 
        <div>{sonum}</div>
    </div>
  )
}

export default LisaJook