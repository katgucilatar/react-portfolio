import { extendTheme } from '@chakra-ui/react'
import '@fontsource/rock-salt';
import '@fontsource/loved-by-the-king';

const theme = extendTheme({
  fonts: {
    heading: `'Rock Salt'`,
    body: `'Loved By The King`,
  },
})

export default theme