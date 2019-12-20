import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
// import ContactForm from "../components/ContactForm"
// import effect from "../components/ThreeJs"
export default function Contact({data 
  // this prop will be injected by the GraphQL query below.
}) {
  const { allMarkdownRemark } = data 
  const { frontmatter } = allMarkdownRemark.edges[0].node;
  const {links, title, email} = frontmatter;
  // useEffect(() => {
  //   if (effectRef !== null) {
  //     effect(effectRef);
  //   }
  // })
  const Header = styled.div`
    text-align: center;
    h1 {
      margin-bottom: .5rem;
      text-align:center;
    }
    h2 {
      margin: 0 0 1rem 0;
      a {
        display: inline-block;
        text-decoration: none;
        opacity: 0.6;
        transition: opacity .2s ease-out;
        &:focus, &:hover {
          opacity: 1;
        }
      }
    }
  `
  const List = styled.div`
    margin: 0 auto;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    li {
      margin: 0 10px 10px 10px;
      max-width: 50px;
      width: 25px;
      @media (min-width: 568px) {
        width: calc(25% - 1rem);
      }
      a {
        width: 100%;
        display: inline-block;
        text-align: center;
        color: black;
        border-radius: 10.5%;
        font-weight: bold;
        letter-spacing: 1.2;
        opacity: 0.5;
        transition: opacity .2s ease-out;
        &:focus, &:hover {
          opacity: 1;
        }
      }
    }
  `
  return(
    <Layout>
        <SEO title="Contact" />
        <Header>
          <h1>{title}</h1>
          <h2><a href={`mailto:${email}`}>{email}</a></h2>
        </Header>
        <List>
          {links.map(link => {
            const {image, imageAlt, url, text} = link
            return (
              <li key={url}>
                <a target="_blank" href={url}>
                  <img title={text} src={image.publicURL} alt={imageAlt}></img>
                  <p class="visually-hidden">{text}</p>
                </a>
              </li> 
            )
            })}
        </List>
        {/* <ContactForm /> */}
    </Layout>
  )
}


export const pageQuery = graphql`
  query ContactPageQuery {
    allMarkdownRemark(filter: {frontmatter: {title: {eq: "Get In Touch"}}}) {
      edges {
        node {
          frontmatter {
            title
            email
            links {
              image {
                publicURL
              }
              imageAlt
              text
              url
            }
          }
        }
      }
    }
  }
`

