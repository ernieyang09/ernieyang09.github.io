import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components'

export default class PostItem extends React.Component {
  render() {
        // <snippet>[^]*?<\/snippet>
    const props = this.props;
    const snippet = props.html.match(/<snippet>[^]*?<\/snippet>/)[0];

    return (
      <div>
        <h3><Link to={props.fields.slug}>{props.frontmatter.title}</Link></h3>
        <h4>{props.frontmatter.date}</h4>
        <div  dangerouslySetInnerHTML={{ __html: snippet }} />
        <Link to={props.fields.slug}>繼續閱讀</Link>
      </div>
    )
  }
}
