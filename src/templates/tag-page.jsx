import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import _ from 'lodash';
import moment from 'moment'
import styled from 'styled-components'

const PostHeader = styled.h2`
  margin: 0;
  text-align: left;
  font-size: 25px;
  font-weight: bold;
  color: #555;
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
        {
          yearList.map(year => {
            const PostsInYear = _.filter(posts, post => moment(post.frontmatter.date).year() === year);
            const PostsJsx = PostsInYear.map((post, i) =>
              <div key={i}>
                {moment(post.frontmatter.date).format("MM月DD日")}
                { '-' }
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </div>
            );
            return (
              <div key={year}>
                <PostHeader>標籤: {tag}</PostHeader>
                <h3>{year}</h3>
                {
                  PostsJsx
                }
              </div>
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
