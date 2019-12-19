import React from "react"
import {Link} from 'gatsby'
import styled from "styled-components"
import logo from "../images/logo.png"
export default function Nav () {
    const Navigation = styled.nav`
        width: 83%;
        margin: 0 auto;
        display: flex; 
        justify-content: space-between;
        align-items:center;
        padding: 10px 0;
        margin-bottom: 1rem;
        img {
            max-width: 200px;
        }
        ul {
            display: flex; 
            margin: 0;
            padding: 0;
            position: relative;
            left: 20px;
            li {
                list-style: none;
                a {
                    font-size: 1rem;
                    padding: 1rem;
                    opacity: 0.6;
                    display: inline-block;
                    text-decoration: none;
                    &:hover, &:focus {
                        opacity: 1;
                    }
                }
            }
        }
    `
    return (
        <Navigation>
            <Link to="/">
                <img src={logo} alt="Liz Faria Logo"></img>
                <p className="visually-hidden">Home</p>
            </Link>
            <ul>
                {/* <li><Link to="/skills">Skills</Link></li> */}
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </Navigation>
    )
}