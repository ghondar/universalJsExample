import React from 'react'
import {Link} from 'react-router'

export default class Home extends React.Component{
  render(){
    return (
      <div>
        <h1>Welcome to Platform</h1>
        <Link to="movies">Buscar Peliculas</Link>
      </div>
    )
  }
}