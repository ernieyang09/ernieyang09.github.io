import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import styled from 'styled-components'
import get from "lodash/get"


// import Bio from "../components/Bio"
// import { rhythm, scale } from "../utils/typography"

const Tag = styled.a`
  text-decoration: none;
  color:#6E7173;
  border:1px solid #ddd;
  margin-right:10px;
  padding: 3px 6px;
  border-radius: 3px;
  font-size: 12px;
  &::before {
    content:'#'
  }
  &:hover {
    border-color: #444;
  }
`;


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
        <div style={{paddingBottom:"6px"}} dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="tags-wrap">
          {
            post.frontmatter.tags.map( (tag,i) =>
              <span className="tag" key={i}>
                <Tag href="/">{tag}</Tag>
              </span>
            )
          }
        </div>

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
