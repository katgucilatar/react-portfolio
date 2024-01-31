import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/rock-salt'
import '@fontsource/loved-by-the-king'
import theme from './theme'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
