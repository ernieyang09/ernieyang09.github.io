import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import styled from 'styled-components'

class TagPostsTemplate extends React.Component {
  render() {
    // const post = this.props.data.markdownRemark
    // const siteTitle = get(this.props, "data.site.siteMetadata.title")

    return (
      <div>124124</div>
      // <div className="Post">
      //   <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
      //   <PostHeader>{post.frontmatter.title}</PostHeader>
      //   <Time>{moment(post.frontmatter.date).format("YYYY年MM月DD日").toString()}</Time>
      //   <div className="post-item" dangerouslySetInnerHTML={{ __html: post.html }} />
      //   <div className="tags-wrap">
      //     {
      //       post.frontmatter.tags.map( (tag,i) =>
      //         <span className="tag" key={i}>
      //           <Tag href="/">{tag}</Tag>
      //         </span>
      //       )
      //     }
      //   </div>
      //
      //   <hr/>
      //   {/* <Bio /> */}
      // </div>
    )
  }
}


export default TagPostsTemplate
