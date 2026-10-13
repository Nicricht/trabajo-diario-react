import { Link } from 'react-router-dom'

// El mismo átomo se reutiliza en cada CardProducto.
interface BotonProps {
  id: number
}
function Boton({ id }: BotonProps) {
  return <Link to={`/producto/${id}`} className="btn btn-primary">Ver producto</Link>
}
export default Boton
