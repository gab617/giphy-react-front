import React, { useEffect, useState, useContext } from 'react'
import './App.css'
import Home from './components/Home'
import { Link, Route } from "wouter"
import SearchResults from './components/SearchResults'
import { GifsContextProvider } from './context/GifsContexs'
import { Categories } from './components/Categories'

/* Al iniciar la app el primer componente que va a renderizar es Home ya que se 
encuentra en el path '/' Si la ruta cambiase a '/search seguido se una keyword valida
Renderizaria en el cliente el componente SearchResults
'*/
const Servidor = () => {
  return (
    <h1>Hola servidor</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to='/categories'>
        <button>Categories</button>
      </Link>

      <Route
        component={Home}
        path='/'
      />

      <Route
        path='/search/:keyword'
        component={SearchResults} />

      <Route
        path='/access'
        component={Servidor} />

      <Route
        path='/categories'
        component={Categories}
      >

      </Route>
    </div>
  )
}

export default App
