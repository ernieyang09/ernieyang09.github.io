import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-bottom: 6px;
  border-bottom: 1px solid #ddd;
  font-weight: normal;
  font-size: 16px;
  margin-top: 24px;
`;

export default class Title extends React.Component {

  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    )
  }
}
