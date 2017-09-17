import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { PostItem } from "../components/PostItem/"

export default class Index extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    return (
      <div className='content-container'>
        {
          posts.map( (post, index) => <PostItem key={index} {...post.node} /> )
        }
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: { release: {eq: true} } }
    ) {
      edges {
        node {
          fields {
            slug
          }
  				frontmatter {
  				  title
  				  date
            tags
            release
  				}
          html
        }
      }
    }
  }
`
