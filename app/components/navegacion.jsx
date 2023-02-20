
import { Link, useLocation } from '@remix-run/react'
import imagen from '../../public/img/carrito.png'
function Navegacion() {
    const location = useLocation();

    return (
        <nav className="navegacion">
            <Link
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
                prefetch='render'
            >Inicio</Link>
            <Link
                to="/nosotros"
                className={location.pathname === '/nosotros' ? 'active' : ''}

                prefetch='render'
            >Nosotros</Link>
            <Link
                to="/guitarras"
                className={location.pathname === '/guitarras' ? 'active' : ''}

                prefetch='render'
            >Tienda</Link>
            <Link
                to="/blog"
                className={location.pathname === '/blog' ? 'active' : ''}

                prefetch='render'
            >Blog</Link>

            <Link
                to="/carrito"

            >
                <img src={imagen} alt="imagen carrito de compras" />

            </Link>
        </nav>
    )
}

export default Navegacion
