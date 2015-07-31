import React from 'react'
import { Route, DefaultRoute, NotFoundRoute } from 'react-router'
import AppContainer from '../containers/AppContainer.react'
import Movies from '../containers/Movies.react'
import Home from '../containers/Home.react'
import ErrorHanlder from '../containers/Error.react'

export default (
  <Route path="/" handler={AppContainer} >
    <DefaultRoute name="home" handler={Home} />
    <Route name="movies" handler={Movies}/>
    <Route name="error" handler={ErrorHanlder}></Route>
    <NotFoundRoute handler={ErrorHanlder}/>
  </Route>
)