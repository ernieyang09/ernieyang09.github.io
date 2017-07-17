import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align:center;
  margin-bottom: 1.5em;
`;

const TitleLink = styled(Link)`
  text-align: center;
  color: #555;
  text-decoration: none;
  font-weight: 900;
  &:hover {
    color:#777;
  }
`;

const H4 = styled.h4`
  color:#999;
  margin:0;
`;

export default class Title extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Wrapper>
        <h1>
          <TitleLink to="/">
            前端小誌
          </TitleLink>
        </h1>
        <H4>一個用來記錄人老會忘記的地方</H4>
      </Wrapper>
    )
  }
}
