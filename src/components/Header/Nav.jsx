import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components'
import cx from 'classnames';

const Wrapper = styled.nav`
  text-align:center;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
`;

const NavLink = styled(Link)`
  text-align: center;
  display: inline-block;
  font-size: 14px;
  box-sizing: border-box;
  color: #444;
  text-decoration: none;
  padding: 6px 18px;
  border-bottom: 1px solid #ddd;
  z-index: 2;
  margin-bottom: -1px;
  &:hover {
    border-bottom: 1px solid #444;
  }
  &.active {
    border:1px solid #ddd;
    border-bottom: 1px solid white;
  }
`;


export default class Nav extends React.Component {

  render() {
    const page = (() => {
      switch(this.props.page) {
        case "/archives":
        case "/about":
        case "/donations":
          return this.props.page;
        default:
          return '/';
      }
    })();

    return (
      <Wrapper>
        <NavLink className={cx({active:page==='/'})} to='/'>首頁</NavLink>
        <NavLink className={cx({active:page==='/about'})}  to='/about'>關於我</NavLink>
      </Wrapper>
    )
  }
}
