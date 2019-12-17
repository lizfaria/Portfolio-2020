import React from "react"
import styled from "styled-components"

const Footer = () => {
    const Container = styled.p`
        display: flex; 
        justify-content: space-between;
    `
    const year = new Date().getFullYear()
    return (
        <footer>
            <Container>
                <span>Liz Faria &copy; {year}</span>
                <span>This site is built with Gatsby, content managed with Netlify CMS and hosted on Netlify </span>
            </Container>
        </footer>
    )
}
export default Footer;