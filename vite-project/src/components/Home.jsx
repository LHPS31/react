import {Homesm} from "./Homesm";

  
export  function Home(props) {
  return (
    <>
    <div>
      <h1>{props.nomePagina}</h1>
      <Homesm />

      <h1>Bem vindo</h1>
      <p>Aqui você vera a incrivel historia de Ayrton Senna Da Silva!</p>

      <img className="imgH" src="https://logos-world.net/wp-content/uploads/2023/12/F1-Logo.png" alt="" />
    </div>

    <div>
      <img className="escuderia" src="https://logos-world.net/wp-content/uploads/2020/07/Ferrari-Scuderia-Logo.png"alt="" />
      <img className="escuderia" src="https://logodownload.org/wp-content/uploads/2014/10/red-bull-logo-4.png" alt="" />
      <img className="escuderia" src="https://i.pinimg.com/originals/26/d3/94/26d394f7b8ecc31f90263bc95f9d8259.png" alt="" />
      <img className="escuderia" src="https://i.pinimg.com/originals/ad/d4/f6/add4f669dfb1b1eaeb2afde6a8d7db06.png" alt="" />
    </div>
    </>
  )
}


