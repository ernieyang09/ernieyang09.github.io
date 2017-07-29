import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components'

import Title from './Title';
import Nav from './Nav';

export default class Header extends React.Component {
  render() {
    return (
      <div style={{margin:'4em 0'}}>
        <Title />
        <Nav page={this.props.path} />
      </div>
    )
  }
}
