const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)
const config = require(`./src/config`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  console.log(boundActionCreators)

  return new Promise((resolve, reject) => {
    const pages = []
    const test = path.resolve("./src/pages/index.js")
    const blogPost = path.resolve("./src/templates/Posts.jsx")
    const tagPages = path.resolve("./src/templates/tag-page.jsx")
    resolve(
      graphql(
        `
      {
        allMarkdownRemark(
          limit: 1000
          filter: {frontmatter: { release: {eq: true} } }
        ) {
          edges {
            node {
              frontmatter {
                tags
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, (edge, index) => {

          createPage({
            path: edge.node.fields.slug,
            component: blogPost,
            // Query variable for template/Posts
            context: {
              slug: edge.node.fields.slug,
            },
          })

          if(index >= config.paginations && (index % config.paginations === 0)) {
            createPage({
              path: `/${index / config.paginations}`,
              component: test,
              // Query variable for index
              context: {
                offset: index,
                paginations: config.paginations,
              },
            })
          }

        })

        // Tag pages.
        let tags = [];
        _.each(result.data.allMarkdownRemark.edges, edge => {
          if (_.get(edge, "node.frontmatter.tags")) {
            tags = tags.concat(edge.node.frontmatter.tags)
          }
        })
        tags = _.uniq(tags)
        tags.forEach(tag => {
          const tagPath = `/tags/${_.kebabCase(tag)}/`
          createPage({
            path: tagPath,
            component: tagPages,
            // Query variable for template/tag-page
            context: {
              tag,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  return new Promise((resolve, reject) => {
    let slug;
    if (node.internal.type === `MarkdownRemark`) {

      const fileNode = getNode(node.parent)
      const parsedFilePath = path.parse(fileNode.relativePath)
      slug = `/posts/${parsedFilePath.name.split("--")[1]}/`
      createNodeField({ node, name: `slug`, value: slug })
    }
    resolve();
  })

}
