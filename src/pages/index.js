import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"

export default function IndexPage({data}) {
  const { allMarkdownRemark } = data 
  const { frontmatter, html } = allMarkdownRemark.edges[0].node;
  const {headshot, overtitle, resume, title} = frontmatter;

  
  const Grid = styled.div`
    @media (min-width: 1100px) {
      display: flex; 
      justify-content: space-between;
      align-items: center;
      padding-bottom: 2rem;
    }
  `
  const Header = styled.h1`
    text-align:left !important;
    &.h1--sm {
      @media(min-width: 1100px) {
        display:none;
      }
    }
    &.h1--lg {
      display: none;
      @media(min-width: 1100px) {
        display:block;
      }
    }
  `
  const LeftColumn = styled.div`
    @media (min-width: 1100px) {
      width: calc(55% - 72px);
      margin-right: 40px;
      margin-bottom: 2rem;
    }
    .image {
      overflow: visible !important;
    }
    img {
      margin-bottom: 1.5rem;
      display: inline-block;
      border-top: 1rem solid white;
      border-bottom: 3rem solid white;
      border-left: 1rem solid white;
      border-right: 1rem solid white;
      box-shadow: 1px 2px 3px rgba(0,0,0,0.3);
      max-width: calc(100% - 2rem)
    }
  `
  const RightColumn = styled.div`
    .title {
      text-align: left;
    }
    @media (min-width: 1100px) {
      width: 45%;
    }
    .links {
      margin: 2rem 0;
    }
  `
  return(
    <Layout>
      <SEO title="About" />
      <Header className="h1--sm">{title}</Header>
      <Grid>
        <LeftColumn>
          <Img className="image" fluid={headshot.childImageSharp.fluid} alt="headshot"/> 
        </LeftColumn>
        <RightColumn>
          <h2>{overtitle}</h2>
          <Header className="h1--lg title">{title}</Header>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <div className="links">
            <a className="primary-btn" target="_blank" href={resume.publicURL}>Resume</a>
            <a className="primary-btn" target="_blank" href="https://medium.com/@lizfaria">Blog</a>
            <a className="primary-btn" target="_blank" href="https://www.linkedin.com/in/liz-faria/">LinkedIn</a>
          </div>
        </RightColumn>
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(filter: {frontmatter: {title: {eq: "Software Developer"}}}) {
      edges {
        node {
          frontmatter {
            headshot {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
            overtitle
            resume {
              publicURL
            }
            title
          }
          html
        }
      }
    }
  }
`;
