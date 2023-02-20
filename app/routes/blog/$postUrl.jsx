import { useLoaderData } from '@remix-run/react';
import { getPost } from '../../models/post.server';
import { formatearFecha } from '../../utils/helper';


export async function loader({ params }) {

    const { postUrl } = params
    const post = await getPost(postUrl)
    console.log(params);

    if (post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Post no encontrado'
        })
    }
    return post
}


export function meta({ data }) {

    if (!data) {
        return {
            title: 'Post No Encontrado',
            description: 'Guitarras, venta de guitarras, post no encontrado'
        }
    }

    return {
        title: `GuitarLA - ${data.data[0].attributes.titulo}`,
        description: `Guitarras, venta de guitarras, entrada ${data.data[0].attributes.titulo}`
    }
}


function PostUrl() {
    const post = useLoaderData()
    const { titulo, imagen, contenido, publishedAt } = post?.data[0]?.attributes
    return (
        <article className="post mt-3">

            <img src={imagen?.data?.attributes?.url} alt={`Imagen blog ${titulo}`} className="imagen" />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="texto">{contenido}</p>

            </div>

        </article>
    )
}

export default PostUrl
