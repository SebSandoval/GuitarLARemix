import { useState, useEffect } from 'react'
import { ClientOnly } from 'remix-utils'
import styles from '~/styles/carrito.css'
import { useOutletContext } from '@remix-run/react'
export function links() {
    return [{
        rel: 'stylesheet',
        href: styles
    }]
}

export function meta() {
    return {
        title: 'GuitarLA - Carrito de Compras',
        description: 'Venta de guitarras, música, blog, carrito, compras'
    }
}
function Carrito() {
    const [total, setTotal] = useState(0)
    const { carrito, actualizarGuitarra, eliminarGuitara } = useOutletContext()


    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)

    }, [carrito])
    return (
        <ClientOnly fallback={'cargando...'}>
            {()=>(
            <main className="contenedor">
                <h1 className="heading">Carrito de compras</h1>
                <div className="contenido">
                    <div className="carrtio">
                        <h2>Artículos</h2>
                        {carrito?.length === 0 ? 'Carrito vacio' : (
                            carrito?.map(producto => (
                                <div key={producto.id} className="producto">
                                    <div>
                                        <img src={producto.imagen} alt={`Imagen del producto ${producto.nombre}`} />
                                    </div>

                                    <div>
                                        <p className="nombre">{producto.nombre}</p>
                                        <p>Cantidad</p>
                                        <select value={producto.cantidad}
                                            className="select"
                                            name="" id=""
                                            onChange={e => actualizarGuitarra({
                                                cantidad: +e.target.value,
                                                id: producto.id
                                            })}
                                        >

                                            <option value="0">--Seleccione--</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        <p className="precio">{producto.precio}</p>
                                        <p className="subtotal">Subtotal: $ <span>
                                            {producto.precio * producto.cantidad}</span></p>

                                    </div>



                                    <button
                                        type='button'
                                        className='btnEliminar'
                                        onClick={() => eliminarGuitara(producto.id)}
                                    >x</button>
                                </div>

                            ))

                        )}

                    </div>
                    <aside className="resumen">
                        <h1>Resumen del pago</h1>
                        <p>Total a pagar: ${total}</p>
                    </aside>
                </div>

            </main>
            )}
        </ClientOnly>
    )

}

export default Carrito
