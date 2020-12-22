import React from "react"
import { Link } from "gatsby"

function Template({ data }) {
  const post = data.markdownRemark
  return (
    <div>
      <Link to="/blog">Back</Link>
      <h3>{post.frontmatter.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`

export default Template
