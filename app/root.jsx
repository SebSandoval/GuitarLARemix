
import { useState, useEffect } from 'react'
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useCatch,
    Link
} from '@remix-run/react'


import Header from '~/components/header'
import styles from '~/styles/index.css'
import Footer from './components/footer'



export function meta() {
    return (
        {
            charset: 'utf-8',
            title: 'GuitarLA - Remix',
            viewport: "width=device-width,initial-scale=1"
        }
    )
}

export function links() {

    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },

        {
            rel: 'preconn',
            href: 'https://fonts.googleapis.com',
            origin: "true"
        }, {
            rel: 'preconn',
            href: 'https://fonts.gstatic.com'
        }, {
            rel: 'preconn',
            href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        },
    ]
}
export default function App() {

    const carritoLS = typeof window !=='undefined'? JSON.parse(localStorage.getItem('carrito')) ?? [] :  null
    const [carrito, setCarrito] = useState(carritoLS)

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])
    const agregarCarrito = guitarra => {

        if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
            //iterar e identificar elemento duplicado
            const carritoActualizado = carrito.map(guitarraState => {
                if (guitarraState.id === guitarra.id) {
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })

            //añadir la nueva cantidad
            setCarrito(carritoActualizado)
        } else {
            setCarrito([...carrito, guitarra])

        }
    }

    const actualizarGuitarra = guitarra => {
        const carritoActualizado = carrito.map(guitarraState => {
            if (guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        setCarrito(carritoActualizado)
    }

    const eliminarGuitara = id => {
        const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== id)
        setCarrito(carritoActualizado)
    }

    return (
        <Document>

            <Outlet
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarGuitarra,
                    eliminarGuitara
                }}
            />

        </Document>
    )
}
function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}
// MAnejo de errores
export function CatchBoundary() {

    const error = useCatch()
    return (
        <Document>

            <p className="error">{error.status} {error.statusText}</p>
            <Link
                to='/'
                className='error-enlace'
            >Tal vez quiera volver a la pagina principal</Link>
        </Document>
    )

}

export function ErrorBoundary({ error }) {
    return (

        <Document>

            <p className="error">{error.status} {error.statusText}</p>
            <Link
                to='/'
                className='error-enlace'
            >Tal vez quiera volver a la pagina principal</Link>
        </Document>)
}