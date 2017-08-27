import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import styled from 'styled-components'
import _ from 'lodash'
import moment from 'moment'
import ReactDisqusThread from 'react-disqus-comments';
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

const CommentBtn = styled.div`
  border:1px solid #ddd;
  text-align: center;
  color:#6E7173;
  line-height: 42px;
  box-sizing: border-box;
  cursor: pointer;
`;

class BlogPostTemplate extends React.Component {

  state = {
    isOpenComment: false,
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = _.get(this.props, "data.site.siteMetadata.title")

    return (
      <div className="post content-container">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <PostHeader>{post.frontmatter.title}</PostHeader>
        <Time>{moment(post.frontmatter.date).format("YYYY年MM月DD日").toString()}</Time>
        <div className="post-item" dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="tags-wrap">
          {
            post.frontmatter.tags.map( (tag,i) =>
              <span className="tag" key={i}>
                <Tag href={`/tags/${_.kebabCase(tag)}/`}>{tag}</Tag>
              </span>
            )
          }
        </div>

        <hr />
        {
          this.state.isOpenComment ?
            <ReactDisqusThread
                shortname="ernieyang09-github-io"
                identifier={post.fields.slug}
                title={post.frontmatter.title}
                style={{minHeight:"45px"}}
            />
          :
            <CommentBtn onClick={()=> this.setState({isOpenComment: true})}>
              展開Disqus
            </CommentBtn>

        }

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
      fields {
        slug
      }
      frontmatter {
        title
        date
        tags
      }
    }
  }
`
