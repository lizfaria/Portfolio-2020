import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"

export default function Portfolio({data}) {
  const { allMarkdownRemark } = data 
  const { frontmatter, html } = allMarkdownRemark.edges[0].node;
  const {projects, title} = frontmatter;

  const List = styled.div`
    list-style: none;
    margin-top: 2rem;
    h2 {
      text-align:left;
    }
    h2, h3 {
      margin-top: 0;
    }
    h3 {
      margin-bottom: 1rem;
      padding-bottom: 0;
      text-transform: uppercase;
      font-size: .8rem;
      letter-spacing: 1.2px;
      font-weight: normal;
      
    }
    li {
      padding: 3rem 0;
      &:first-child {
        border-top: 3px double orange;
      }
      border-bottom: 3px double orange;
      &:last-child {
        border-bottom: none;
      }
      .grid {
        @media (min-width: 768px) {
          display: flex;
          justify-content:space-between;
        }
      }
    }
    .primary-btn {
      margin-bottom: 1rem;
    }
  `
  const LeftColumn = styled.div`
  @media (min-width: 768px) {
    width: calc(50% - 1.5rem);
  }
  a {
    display: block;
    margin-bottom: 1rem;
    position: relative;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.3);

  }
  `
  const RightColumn = styled.div`
  @media (min-width: 768px) {
    width: calc(50% - 1.5rem);
  }
    .text-container {
      margin-bottom: 1.5rem;
    }

  `
  return(
    <Layout>
      <SEO title="Portfolio" />
     
      <h1>{title}</h1>
      <div className="intro_text" dangerouslySetInnerHTML={{ __html: html }} />
      
      <List>
      {projects.map(project => {
        const {image, imageAlt, links, subtitle, text, title} = project;
        const subtitleSplit = subtitle.split(', ').join(" | ")
        return (
          <li key={image}>
              <h2>{title}</h2>
            <div className="grid">
              <LeftColumn>
                {links.filter((link, index) => link === links[0]).map(link => {
                  return (
                    <a target="_blank" href={link.url}>
                      <p class="visually-hidden">{link.url_text}</p>
                      {console.log(image.childImageSharp.fluid)}
                      <Img fluid={image.childImageSharp.fluid} alt={imageAlt} />
                    </a>
                  ) 
                })}
              </LeftColumn>
              <RightColumn>
                <h3>{subtitleSplit}</h3>
                <p className="text-container" dangerouslySetInnerHTML={{ __html: text }} />
                {links.map(link =><a className="primary-btn" target="_blank" href={link.url}>{link.url_text}</a>)}
              </RightColumn>
              
            </div>
          </li> 
        )
      })}
      </List>
    </Layout>
  )
}


export const pageQuery = graphql`
  query portfolioPage {
    allMarkdownRemark(filter: {frontmatter: {title: {eq: "Featured Work"}}}) {
      edges {
        node {
          frontmatter {
            title
            projects {
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
              imageAlt
              links {
                url
                url_text
              }
              subtitle
              text
              title
            }
          }
          html
        }
      }
    }
  }
`