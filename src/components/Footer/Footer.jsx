import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 20px 0;
  border-top: 1px solid #eceff2;
  color: #565a5f;
  font-size: 16px;
  text-align: center;
  margin-top: 45px;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
        © 2017 ernieyang
      </Wrapper>
    )
  }
}
