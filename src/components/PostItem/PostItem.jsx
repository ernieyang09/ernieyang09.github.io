import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components'

const Post = styled.div`
  padding-bottom: 40px;
`;

const PostSnippet = styled.div`
  clear: left;
  font-size: 15px;
  line-height: 1.77;
  color: #444;
  padding-top: 15px;
  text-align: justify;
  text-justify: distribute;
  word-break: normal;
`;

const BtnLink = styled(Link)`
  font-size: 14px;
  color: #444;
  margin-top: 10px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  float: right;
  &:hover {
    background: #F8F8F8;
    border-bottom-color: #D26911;
  }
`;


export default class PostItem extends React.Component {
  render() {
        // <snippet>[^]*?<\/snippet>
    const props = this.props;
    const snippet = props.html.match(/<snippet>[^]*?<\/snippet>/)[0];

    return (
      <Post>
        <h3><Link to={props.fields.slug}>{props.frontmatter.title}</Link></h3>
        <h4>{props.frontmatter.date}</h4>
        <PostSnippet  dangerouslySetInnerHTML={{ __html: snippet }} />
        <BtnLink to={props.fields.slug}>繼續閱讀</BtnLink>
      </Post>
    )
  }
}
