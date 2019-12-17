import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactMarkdown from 'react-markdown';
import styled from "styled-components"
export default function IndexPage({data 
  // this prop will be injected by the GraphQL query below.
}) {
  const { allMarkdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = allMarkdownRemark.edges[0].node;
  const {headshot, overtitle, resume, title} = frontmatter;
  const LeftColumn = styled.div`
    width: calc(40% - 20px);
    display: inline-block;
    margin-right: 20px;
  `
  const RightColumn = styled.div`
    width: 60%;
    display: inline-block;  
  `
  return(
    <Layout>
      <SEO title="Home" />
      <LeftColumn>
        <img src={headshot} alt="headshot"/>
      </LeftColumn>
      <RightColumn>
        <h2>{overtitle}</h2>
        <h1>{title}</h1>
        <ReactMarkdown className="markdown" source={html}/>
        <a href={resume}>Resume</a>
      </RightColumn>
    </Layout>
  )
}


export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(filter: {frontmatter: {title: {eq: "Software Developer"}}}) {
      edges {
        node {
          frontmatter {
            headshot
            overtitle
            resume
            title
          }
          html
        }
      }
    }
  }
`;
