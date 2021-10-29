import React, { useState, useEffect } from 'react'
import { Route, useParams, useRouteMatch } from 'react-router'
import { busca } from '../api/api'
import '../assets/css/blog.css'
import ListaCategorias from '../components/lista-categorias'
import ListaPost from '../components/lista-post'

const Categoria = () => {
    const { id } = useParams();
    const { path } = useRouteMatch();
    const [subcategorias, setSubcategorias] = useState([]);

    useEffect(() => {
      busca(`/categorias/${id}`, (categoria) => {
        setSubcategorias(categoria.subcategorias);
      });
    }, [id])

    return(
        <>
        <div className="container">
            <h2 className="titulo-pagina">Pet Notícias</h2>
        </div>
        <ListaCategorias />
        <Route exact path={`${path}/`}>
            <ListaPost url={`/posts?categoria=${id}`}/>
        </Route>
        </>
    )
}

export default Categoria