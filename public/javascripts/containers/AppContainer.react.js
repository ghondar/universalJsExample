import React from 'react'
import { RouteHandler } from 'react-router'
import Layout from './Layout.react'

export default class AppContainer extends React.Component{
  render(){
    return (
      <Layout {...this.props}>
        <RouteHandler {...this.props}/>
      </Layout>
    )
  }
}