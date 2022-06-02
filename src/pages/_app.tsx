import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  ThemeProvider,
} from "@mui/material/styles"
import { createTheme } from "@mui/system"
import type { AppProps } from "next/app"
import Header from "../components/Header"
import Menu from "../components/Menu"
import "../globalStyles/global.css"

const defaultTheme = createTheme({})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssVarsProvider>
          <Header />
          <Menu />
          <Component {...pageProps} />
        </CssVarsProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
