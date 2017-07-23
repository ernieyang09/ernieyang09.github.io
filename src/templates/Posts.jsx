import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import get from "lodash/get"


// import Bio from "../components/Bio"
// import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    console.log(this)
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, "data.site.siteMetadata.title")

    return (
      <div style={{paddingRight:"35px"}}>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>
          {post.frontmatter.title}
        </h1>
        <p>
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr/>
        {/* <Bio /> */}
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`
