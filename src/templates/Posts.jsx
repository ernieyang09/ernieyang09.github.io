import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import styled from 'styled-components'
import get from "lodash/get"
import moment from 'moment'
import './post.scss';

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

const PostHeader = styled.h2`
  margin: 0;
  text-align: left;
  font-size: 25px;
  font-weight: bold;
  color: #555;
`;

const Time = styled.div`
    padding: 0;
    margin: 15px 0 0;
    color: #6E7173;
    text-indent: .15em;
`;


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, "data.site.siteMetadata.title")

    return (
      <div className="Post">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <PostHeader>{post.frontmatter.title}</PostHeader>
        <Time>{moment(post.frontmatter.date).format("YYYY年MM月DD日").toString()}</Time>
        <div className="post-item" dangerouslySetInnerHTML={{ __html: post.html }} />
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
        date
        tags
      }
    }
  }
`
