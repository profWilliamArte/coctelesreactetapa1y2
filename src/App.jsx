
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Licor from './pages/Licor'
import Detalle from './pages/Detalle'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/inicio' element={<Inicio/>}/>
          <Route path='/licor/:id/:tipo' element={<Licor/>}/>
          <Route path='/detalle/:id' element={<Detalle/>}/>
          <Route path='/' element={<Inicio/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>  
  )
}

export default App
