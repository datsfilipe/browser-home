import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/Themes/theme'
import GlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
export default MyApp
