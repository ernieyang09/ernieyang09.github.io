const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve("./src/templates/Posts.jsx")
    resolve(
      graphql(
        `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
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
        _.each(result.data.allMarkdownRemark.edges, edge => {
          createPage({
            path: edge.node.fields.slug,
            component: blogPost,
            // Query variable for template/Posts
            context: {
              slug: edge.node.fields.slug,
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
      slug = `/${parsedFilePath.dir.split("--")[1]}/`
      createNodeField({ node, name: `slug`, value: slug })
    }
    resolve();
  })

}
