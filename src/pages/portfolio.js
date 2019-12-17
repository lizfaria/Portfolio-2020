import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Portfolio({data 
  // this prop will be injected by the GraphQL query below.
}) {
  return(
    <Layout>
      <SEO title="Portfolio" />
      <h1>Under Construction</h1>
    </Layout>
  )
}


// export const pageQuery = graphql`
//   query HomePageQuery {
//     allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "home"}}}) {
//       edges {
//         node {
//           frontmatter {
//             title
//             headshot {
//               image
//             }
//             body
//             resume {
//               file
//             }
//           }
//         }
//       }
//     }
//   }
// `;
