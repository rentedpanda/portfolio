import React, { Component } from 'react'
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import ButtonAppBar from "../components/header"
import { Container, makeStyles, Typography, withWidth, Paper } from '@material-ui/core'
import styles from "../components/styles.module.css"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Start from "../components/start"
import Work from "../components/work"
import About from '../components/about'
import Contact from '../components/contact'


const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
export function Home(props) {
  let parallax = ""
  const matches = useMediaQuery('(min-width:600px)');
  const matchesIpad = useMediaQuery('(min-width:1025px)');
  const Ipad = useMediaQuery('(min-width:960px)');
  return (
<React.Fragment>
    <div style={{ backgroundColor:"#070B34"}}>
    <style jsx>
        {` @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');`}
      </style>
      <div style={{backgroundImage: url('stars', true), backgroundSize: 'cover'}}>
      
      <header>
        <ButtonAppBar scroll={() => parallax.scrollTo(2)} />
      </header>
      <main>
        <Start matches={matches} ipadMatch={matchesIpad} />
        <About matches={matches} ipadMatch={matchesIpad} ipad={Ipad}/>
        <Work matches={matches} ipadMatch={matchesIpad} ipad={Ipad}/>
        <Contact matches={matches} ipadMatch={matchesIpad} ipad={Ipad}/>
      </main>

      </div>
    </div>
    
    </React.Fragment>
  )
}

export default withWidth()(Home)
