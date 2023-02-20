import Imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
    return {
        title: 'GuitarLA - Sobre nosotros',
        descripcion: 'Venta de guitarras, blog de música'
    }

}
export function links() {
    return [

        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: Imagen,
            as: 'Imagen'
        }]
}
function Nosotros() {
    return (
        <main className='contenedor nosotros'>
            <h2 className='heading'>Nosotros</h2>
            <div className='contenido'>
                <img src={Imagen} alt="Imagen sobre nosotros" />

                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum."</p>
                <p>"At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                    culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
                    quidem rerum facilis est et expedita distinctio.</p>
            </div>
        </main>
    )
}

export default Nosotros
