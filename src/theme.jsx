import { extendTheme } from '@chakra-ui/react'
import '@fontsource/rock-salt';

const theme = extendTheme({
    textStyles: {
        h1: {
            fontFamily: 'Rock Salt',
            fontSize: '84px',
            fontWeight: 'bold',
            lineHeight: '90%',
            letterSpacing: '3%'
        }
    },
  })

  export default theme;