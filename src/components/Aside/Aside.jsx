import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components'
import Title from './Title';


export default class Aside extends React.Component {

  render() {

    return (
      <div className='aside'>
        <Title>分類</Title>
        <Title>最近文章</Title>
        <Title>友站連結</Title>
      </div>
    )
  }
}
