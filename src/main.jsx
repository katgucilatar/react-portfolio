import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/rock-salt'
import '@fontsource/loved-by-the-king'
import theme from './theme'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Projects',
        element: <Projects />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </RouterProvider>,
)
