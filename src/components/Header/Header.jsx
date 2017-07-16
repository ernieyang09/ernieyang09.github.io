import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align:center;
  margin: 2em 0;
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
`;

export default class Header extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }


  render() {
    // 根據location可以換header
    // const { location, children } = this.props;
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
