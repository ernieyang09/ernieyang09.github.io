import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components'
import Title from './Title';

const Wrapper = styled.div`
  flex-basis: 215px;
  border-left: 1px solid #ddd;
  padding-left: 35px;
  color: #6E7173;
`;

export default class Aside extends React.Component {

  render() {

    return (
      <Wrapper>
        <Title>分類</Title>
        <Title>最近文章</Title>
        <Title>友站連結</Title>
      </Wrapper>
    )
  }
}
