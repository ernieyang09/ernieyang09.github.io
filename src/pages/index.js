import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Index extends React.Component {
  render() {
    console.log(this.props.data)
    return (
      <div>
        test
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
