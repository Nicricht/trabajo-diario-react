import CardProducto from '../components/moleculas/CardProducto'

function Productos() {
  return (
    <div className="container mt-4 text-center">
      <h1>Productos</h1>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        <CardProducto id={1} titulo="Notebook" descripcion="Notebook ideal para estudiar y trabajar."
          precio={599990} imagen="/img/notebook.svg" />
        <CardProducto id={2} titulo="Mouse" descripcion="Mouse inalámbrico."
          precio={19990} imagen="/img/mouse.jpg" />
        <CardProducto id={3} titulo="Teclado" descripcion="Teclado mecánico."
          precio={39990} imagen="/img/teclado.jpg" />
        <CardProducto id={4} titulo="Audífonos" descripcion="Audífonos Bluetooth inalámbricos."
          precio={29990} imagen="/img/audifonos.jpg" />
      </div>
    </div>
  )
}

export default Productos
