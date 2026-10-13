import { useParams } from 'react-router-dom'
import BotonVolver from '../components/atomos/BotonVolver'

const productos = [
  { id: 1, titulo: 'Notebook', descripcion: 'Notebook ideal para estudiar y trabajar.', precio: 599990, imagen: '/img/notebook.jpg' },
  { id: 2, titulo: 'Mouse', descripcion: 'Mouse inalámbrico.', precio: 19990, imagen: '/img/mouse.jpg' },
  { id: 3, titulo: 'Teclado', descripcion: 'Teclado mecánico.', precio: 39990, imagen: '/img/teclado.jpg' },
  { id: 4, titulo: 'Audífonos', descripcion: 'Audífonos Bluetooth inalámbricos.', precio: 29990, imagen: '/img/audifonos.jpg' },
]

function DetalleProducto() {
  const { id } = useParams()
  const producto = productos.find((producto) => producto.id === Number(id))

  if (!producto) {
    return (
      <div className="container mt-4 text-center">
        <h1>Producto no encontrado</h1>
        <BotonVolver />
      </div>
    )
  }

  return (
    <div className="container mt-4 text-center">
      <h1>Detalle del producto</h1>
      <img src={producto.imagen} alt={producto.titulo}
        style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
      <h2>{producto.titulo}</h2>
      <p>{producto.descripcion}</p>
      <p>${producto.precio}</p>
      <BotonVolver />
    </div>
  )
}

export default DetalleProducto
