import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Notable');
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
`

const Layout = (props) => (
  <div>
    <GlobalStyles />
      {props.children}
  </div>
)

export default Layout
