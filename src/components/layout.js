import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"
import styled from "styled-components"
import "./layout.css";

const Layout = ({ children }) => {

  const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1440px;
    min-height: 100vh;
    font-size: 16px;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a {
      color: black;
    }
    img {
      max-width: 100%;
    }
  `
  const Main = styled.main`
    width: 83%;
    margin: 0 auto;
  `
  return (
    <Wrapper>
      <Nav />
        <Main>{children}</Main>
      <Footer />
    </Wrapper>
  )
}

export default Layout
