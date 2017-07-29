import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components'
import moment from 'moment'

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

const PostHeader = styled.h2`
  margin: 0;
  color: #555;
  text-align: left;
  font-size: 25px;
  font-weight: bold;
  & a {
    text-decoration: none;
    color: #555;
  }
`;

const Time = styled.div`
    padding: 0;
    margin: 15px 0 0;
    color: #6E7173;
    text-indent: .15em;
`;


export default class PostItem extends React.Component {
  render() {
        // <snippet>[^]*?<\/snippet>
    const props = this.props;
    const snippet = props.html.match(/<snippet>[^]*?<\/snippet>/)[0];

    return (
      <Post>
        <PostHeader><Link to={props.fields.slug}>{props.frontmatter.title}</Link></PostHeader>
        <Time>{moment(props.frontmatter.date).format("YYYY年MM月DD日").toString()}</Time>
        <PostSnippet  dangerouslySetInnerHTML={{ __html: snippet }} />
        <BtnLink to={props.fields.slug}>繼續閱讀</BtnLink>
      </Post>
    )
  }
}
