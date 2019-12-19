import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

export default function Skills({data}) {
  const { allMarkdownRemark } = data 
  const { frontmatter } = allMarkdownRemark.edges[0].node;
  const {skills_list, title} = frontmatter;
  const List = styled.div`
    box-sizing: none;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    li {
      width: 25%;
      text-align: center;
      color: black;
    }
  `
  return(
    <Layout>
      <SEO title="Home" />
      <h1>{title}</h1>
      <List>
        {skills_list.map(skill => <li key={skill.text}><p>{skill.text}</p></li> )}
      </List>
    </Layout>
  )
}


export const pageQuery = graphql`
  query SkillsPageQuery {
    allMarkdownRemark(filter: {frontmatter: {title: {eq: "Skills"}}}) {
      edges {
        node {
          frontmatter {
            title
            skills_list {
              text
            }
          }
        }
      }
    }
  }
`;
