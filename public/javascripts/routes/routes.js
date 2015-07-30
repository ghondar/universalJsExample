import React from 'react'
import { Route, DefaultRoute } from 'react-router'
import AppContainer from '../containers/AppContainer.react'
import Movies from '../containers/Movies.react'
import Home from '../containers/Home.react'

export default (
  <Route path="/" handler={AppContainer} >
    <DefaultRoute name="home" handler={Home} />
    <Route name="movies" handler={Movies}/>
  </Route>
)