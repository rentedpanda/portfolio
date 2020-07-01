
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import purple from "@material-ui/core/colors/purple"
const theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            WebkitFontSmoothing: 'auto',
          },
          body:{
              backgroundColor:"#EDF5E1",
          },
          ".MuiAppBar-root":{
              backgroundColor:"transparent",
              color:"#ffffff"
          }
        },
      },
    },
    palette: {
        primary: {
          main: "#1e1e1e",
          contrastText:"#EDF5E1"
        },
        secondary: {
          main: "#5CDB95",
          dark:"#379683",
          light:"#8EE4AF"
        },
        text:{
            primary:"#EDF5E1",
        },

  },
  typography: {
    // Use the system font.
    fontFamily:
      'Roboto Condensed, Lato,Arial,sans-serif',
  },
});

export default theme