import React from "react"
import PropTypes from 'prop-types'
import {ThemeProvider, CssBaseline} from "@material-ui/core"
import theme from "../src/theme"
import "../global.css"
import {withStyles} from "@material-ui/core"
export default function MyApp(props) {
    const { Component, pageProps } = props;
  
    React.useEffect(() => {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    }, [])
    return (
          <React.Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }



    MyApp.propTypes = {
        Component: PropTypes.elementType.isRequired,
        pageProps: PropTypes.object.isRequired,
      };