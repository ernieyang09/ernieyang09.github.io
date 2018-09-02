import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const PaginationWrap = styled.div`
  margin: 4em 0;
  text-align: right;
`

const PaginationBtn = styled(Link)`
  display: inline-block;
  margin: 0 0.5em;
`

export default class Pagination extends React.Component {
  render() {
    const pages = Math.ceil(this.props.total / this.props.paginations);

    return (
      <PaginationWrap>
        {
          Array.from(Array(pages).keys()).map(page => (
            page === 0 ?
              <PaginationBtn key={page} to='/'>0</PaginationBtn>
            :
              <PaginationBtn key={page} to={`/${page}`}>{page}</PaginationBtn>
          ))
        }
      </PaginationWrap>
    )
  }
}
