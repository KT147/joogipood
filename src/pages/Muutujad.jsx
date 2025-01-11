import { useState } from "react"


function Muutujad() {
    const [kasutajanimi, muudaKasutajanimi] = useState("Kevin123")

    const [kogus, muudaKogus] = useState(5)

    const [teade, muudaTeade] = useState ("Tere")

    const [vanus, muudaVanust] = useState (65)

    const teineKasutajanimi = () => {
     muudaKasutajanimi("321niveK")
    }

    const suurendaKolmKorda = () => {
        muudaKogus(kogus * 3)
    }

    const lisaMaailm = () => {
        muudaTeade(teade + " " + "maailm!")
    } 

    const suurendaVanust = () => {
        muudaVanust (vanus +1)
    }

    const vahendaVanust = () => {
        muudaVanust (vanus -1)
    }


  return (
    <div>
        <br /><br />
        <div>{kasutajanimi}</div>
        <button onClick={teineKasutajanimi}>Muuda kasutajanime</button>

        <br /><br />
        <div>{kogus}</div>
        <button onClick={suurendaKolmKorda}>Suurenda kogust kolm korda</button>

        <br /><br />
        {teade === "Tere maailm!" && <div>{teade}</div>}
        <button onClick={lisaMaailm}>Lisa sõnale maailm</button>

        <br /><br />
        {vanus >= 65 && <div>Oled pensionil</div>}
        {vanus < 65 && <div>Oled tööealine</div>}
        <button onClick={suurendaVanust}>Suurenda vanust 1 aasta võrra</button>
        <button onClick={vahendaVanust}>Vähenda vanust 1 aasta võrra</button>
        <br /><br />
        {vanus}

    </div>
  )
}

export default Muutujad