import React from "react"
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