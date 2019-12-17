import React from "react"
import {Link} from 'gatsby'
import styled from "styled-components"

const Nav = ({data}) => {
    const Navigation = styled.nav`
        display: flex; 
        justify-content: space-between;
        ul {
            display: flex; 
            li {
                list-style: none;
                padding: 20px;
                a {
                    text-decoration: none;
                    &:hover, &:focus {
                        text-decoration: underline;
                    }
                }
            }
        }
    `
    return (
        <Navigation>
            <Link to="/">
                <img src="" alt=""></img>
                <p className="visually-hidden"></p>
            </Link>
            <ul>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </Navigation>
    )
}

export default Nav;



// export const pageQuery = graphql`
//   query HomePageQuery {
//     allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "home"}}}) {
//       edges {
//         node {
//             frontmatter {
//                 logo {
//                     image
//                 }
//             }
//         }
//       }
//     }
//   }
// `;
