import React from "react"
import styled from "styled-components"

const Footer = () => {
    const Container = styled.div`
        text-align:center;
        border-top: 3px double orange;
        padding-top: 1rem;
        p {
            font-size: .9rem;
            font-weight: 300;
            margin: 0;
            padding: 0;
            margin-bottom: 5px;
        }
    `
    const year = new Date().getFullYear()
    return (
        <footer className="wrapper">
            <Container>
                <p>Liz Faria &copy; {year}</p>
                <p>This site is built with Gatsby, content managed with Netlify CMS and hosted on Netlify </p>
            </Container>
        </footer>
    )
}
export default Footer;