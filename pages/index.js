import React, { useRef  } from 'react'
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
        <ButtonAppBar/>
      </header>
      <main>

        <div id="start">
        <Start  matches={matches} ipadMatch={matchesIpad} ipad={Ipad} />
        </div>

        <div id="about">
        <About  matches={matches} ipadMatch={matchesIpad} ipad={Ipad}/>
        </div>

        <div id="work">
        <Work matches={matches} ipadMatch={matchesIpad} ipad={Ipad}/>
        </div>

        <div id="contact">
        <Contact  matches={matches} ipadMatch={matchesIpad} ipad={Ipad}/>
        </div>

      </main>
      <footer style={{backgroundColor: "rgba(0, 0, 0, 0.7)",paddingLeft:"30px",paddingBottom:"5px"}}>
        <Typography style={{fontWeight:"lighter",fontSize:10,color:"rgba(255,255,255,0.7)"}}>
        <span>&#xa9;</span> Made with love by Anuswant Pandey.
        </Typography>
      </footer>
      </div>
    </div>
    
    </React.Fragment>
  )
}

export default withWidth()(Home)
