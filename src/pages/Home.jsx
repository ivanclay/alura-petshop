import React from 'react'
import ListaCategorias from '../components/lista-categorias'
import ListaPost from '../components/lista-post'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListaCategorias/>
      <ListaPost url={'/posts'}/>
    </main>
  )
}

export default Home
