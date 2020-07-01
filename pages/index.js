import React, { Component } from 'react'
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import ButtonAppBar from "../components/header"
import { Container, makeStyles, Typography, withWidth } from '@material-ui/core'
import styles from "../components/styles.module.css"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Start from "../components/start"
import Work from "../components/work"
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
export function Home(props) {
  let parallax = ""
  const matches = useMediaQuery('(min-width:600px)');
  const matchesIpad = useMediaQuery('(min-width:1025px)');
  return (
<React.Fragment>
    <div style={{ backgroundColor:"#070B34"}}>
      <div style={{backgroundImage: url('stars', true), backgroundSize: 'cover'}}>
      <style jsx>
        {` @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');`}
      </style>
      <header>
        <ButtonAppBar scroll={() => parallax.scrollTo(2)} />
      </header>
      <main>
        <Start matches={matches} ipadMatch={matchesIpad}/>
        <Work/>
        <Container maxWidth="xl" style={{height:"100vh",backgroundColor:"#1e1e1e"}}></Container>
        <Container maxWidth="xl" style={{height:"100vh",backgroundColor:"#1e1e1e"}}></Container>
      </main>

      </div>
    </div>
    </React.Fragment>
  )
}

export default withWidth()(Home)
