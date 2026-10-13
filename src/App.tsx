import { Route, Routes } from 'react-router-dom'
import Navbar from './components/organismos/Navbar'
import Inicio from './paginas/Inicio'
import Productos from './paginas/Productos'
import DetalleProducto from './paginas/DetalleProducto'
import Contacto from './paginas/Contacto'
import Login from './paginas/Login'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
