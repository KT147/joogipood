import { useRef, useState } from "react"


function MuutujadTeine() {

    const [meil, muudaMeil] = useState ("meiliaadress@gmail.com")

    const [sonum, muudaSonum] = useState()

    const meilRef = useRef ()


    //selles kohas kasutasin natuke chati abi
    const uusMeil = () => {
        const sisestatudMeil = meilRef.current.value
        muudaSonum(sisestatudMeil.includes(".") ? "E-mail lisatud" : "E-mail peab sisaldama '.' sümbolit")
        muudaMeil(sisestatudMeil);
    }





    const [nimi, muudaNimi] = useState("")

    const [sonumKaks, muudaSonumKaks] = useState("")

    const nimiRef = useRef()

    /// esimest korda charAt

    const uusNimi = () => {
        const sisestatudNimi = nimiRef.current.value
        muudaSonumKaks(sisestatudNimi.charAt(3) === "o" ? "Neljandaks täheks on o" : "")
        muudaNimi(sisestatudNimi)
    }






    const [sisselogitud, muudaSisselogitud] = useState (true)

    const logiSisse = () => {
        muudaSisselogitud(true)
    }

    const logiValja = () => {
        muudaSisselogitud(false)
    }




    const tooteKogus = useState("10")
    const tooteNimi = useState("Fantat")


    const [arvuti, muudaArvuti] = useState ("iMac")
    const [sonumKolm, muudaSonumKolm] = useState ("")

    const arvutiRef = useRef()

    const uusArvuti = () =>{
        const sisestatudArvuti = arvutiRef.current.value
        muudaSonumKolm(sisestatudArvuti.charAt(0) === "A" || sisestatudArvuti.charAt(0) === "a"  ? "Arvuti algab A-tähega" : "Arvuti ei alga A-tähega")
        muudaArvuti(sisestatudArvuti)
    }




    const [parool, muudaParool] = useState ()
    const [sonumNeli, muudaSonumNeli] = useState ()

    const paroolRef = useRef ()

    const sisestaParool = () => {
        const uusParool = paroolRef.current.value
        muudaSonumNeli(uusParool.length >= 8 ? "Parool on piisavalt pikk" : "Parool peab olema vähemalt 8-tähemärki")
        muudaParool(uusParool)
    }



   

  return (
    <div>
        <div>{meil}</div>
        <label>Muuda emaili</label>
        <input ref={meilRef} type="email" />
        <button onClick={uusMeil}>Sisesta</button>
        <div>{sonum}</div>

        <br /><br /><br />
        <div>{nimi}</div>
        <label>Muuda nime</label>
        <input ref={nimiRef} type="text" />
        <button onClick={uusNimi}>Sisesta</button> <br />
        {sonumKaks}

        <br /><br /><br />
        {sisselogitud === true && <div>Kasutaja on sisse logitud</div> }
        {sisselogitud === false && <div>Kasutaja ei ole sisse logitud</div> }
        <button onClick={logiSisse}>Logi sisse</button>
        <button onClick={logiValja}>Logi välja</button>

        <br /><br /><br />
        <div>Tooted: {tooteKogus}-{tooteNimi}</div>

        <br /><br /><br />
        <div>{arvuti}</div>
        <label>Muuda arvutit</label>
        <input ref={arvutiRef} type="text" />
        <button onClick={uusArvuti}>Sisesta</button>
        <div>{sonumKolm}</div>

        <br /><br /><br />
        <div>{parool}</div>
        <label>Sisesta parool</label>
        <input ref={paroolRef} type="password" />
        <button onClick={sisestaParool}>Sisesta</button>
        <div>{sonumNeli}</div>
    </div>
  )
}

export default MuutujadTeine