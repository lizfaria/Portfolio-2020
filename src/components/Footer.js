import React from "react"
import styled from "styled-components"

const Footer = () => {
    const Container = styled.div`
        text-align:center;
    `
    const year = new Date().getFullYear()
    return (
        <footer>
            <Container>
                <p>Liz Faria &copy; {year}</p>
                <p>This site is built with Gatsby, content managed with Netlify CMS and hosted on Netlify </p>
            </Container>
        </footer>
    )
}
export default Footer;