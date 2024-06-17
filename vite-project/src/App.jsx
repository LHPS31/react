
import {Header} from './components/Header'
import {Home} from './components/Home'
import {Mission} from './components/Mission'
import {History} from './components/History'
import {Contact} from './components/Contact'
import {Produto} from './components/Produto'
import {Footer} from './components/Footer'
import {Routes,Route} from "react-router-dom"
import './App.css'

function App() {

  return (
    <> 
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mission" element={<Mission  />} />
        <Route path="/History" element={<History  />} />
        <Route path="/Produto" element={<Produto nomePagina='Aqui você vera todas os carros das escuderias em que Ayrton Senna ja correu'/>} />
        <Route path="/contact" element={<Contact nomePagina='Fale conosco' />} />
      
      </Routes>
      
      <Footer />
          
    </div>
    </>
  )
}

export default App
