import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 1.5em;

`;

const TitleLink = styled.h1`
  padding: 0;
  margin: 0;
  overflow: hidden;

  & a {
    color: #555;
    text-decoration: none;
    font-weight: 900;
    font-size:38px;

    &:hover {
      color:#777;
    }
  }

`;

const H4 = styled.h4`
  color:#999;
  margin:0;
  margin-top:6px;
`;

export default class Title extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Wrapper>
        <TitleLink>
          <Link to="/">
            前端小誌
          </Link>
        </TitleLink>
        <H4>一個用來記錄人老會忘記的地方</H4>
      </Wrapper>
    )
  }
}
