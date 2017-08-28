import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import _ from 'lodash'
import moment from 'moment'
import styled from 'styled-components'

const PostHeader = styled.h2`
  margin: 0;
  text-align: left;
  font-size: 25px;
  font-weight: bold;
  color: #555;
  margin-bottom: 50px;
`;

const Year = styled.div`
  margin-left: 12px;
  margin-bottom: 50px;
`;

const Article = styled.li`
  margin: 15px 0;
  letter-spacing: 0.2px;
`;

const PageLink = styled(Link)`
  color: #555;

  &:hover {
    #444
  }
`;

class TagPostsTemplate extends React.Component {
  render() {
    const tag = this.props.pathContext.tag;
    const posts = _.map(this.props.data.allMarkdownRemark.edges, 'node');
    let yearList = [];
    _.each(posts, post => {
      yearList = yearList.concat(moment(post.frontmatter.date).year());
    });
    yearList = _.uniq(yearList);

    return (
      <div className="content-container">
        <PostHeader>標籤: {tag}</PostHeader>
        {
          yearList.map(year => {
            const PostsInYear = _.filter(posts, post => moment(post.frontmatter.date).year() === year);
            const PostsJsx = PostsInYear.map((post, i) =>
              <Article key={i}>
                {moment(post.frontmatter.date).format("YYYY/MM/DD")}
                &nbsp;&nbsp;
                <PageLink to={post.fields.slug}>{post.frontmatter.title}</PageLink>
              </Article>
            );
            return (
              <Year key={year}>
                <h3>{year}</h3>
                <ul>
                {
                  PostsJsx
                }
                </ul>
              </Year>
            )
          })
        }
      </div>
    )
  }
}


export default TagPostsTemplate


export const pageQuery = graphql`
  query BlogPostByTag($tag: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { release: {eq: true}, tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
