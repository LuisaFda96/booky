import { createMuiTheme } from '@material-ui/core/styles'
import blueGrey from  '@material-ui/core/colors/blueGrey'
// import { lightGreen } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette:{
        primary:{
            main: blueGrey[50]
        }
    }
})
export default theme;