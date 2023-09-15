import React, { useEffect, useState, useContext } from 'react'
import './App.css'
import Home from './components/Home'
import { Link, Route } from "wouter"
import SearchResults from './components/SearchResults'
import Context from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContexs'

/* Al iniciar la app el primer componente que va a renderizar es Home ya que se 
encuentra en el path '/' Si la ruta cambiase a '/search seguido se una keyword valida
Renderizaria en el cliente el componente SearchResults
'*/
const Servidor = () =>{
  return(
    <h1>Hola servidor</h1>
  )
}

function App() {
  return (
    <div className="App">
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
    </div>
  )
}

export default App
