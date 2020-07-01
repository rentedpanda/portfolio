import React, { Component } from 'react'
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import ButtonAppBar from "../components/header"
import { Container,makeStyles, Typography,withWidth } from '@material-ui/core'
import styles from "../components/styles.module.css"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Start from "../components/start"
export function Home (props) {
    let parallax=""
    const matches = useMediaQuery('(min-width:600px)');
    return (
      <div style={{backgroundColor:"#192a56"}}>
        <style jsx>
         {` @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');`}
        </style>
        <Parallax style={{backgroundImage:"url('bg2.jpg')", backgroundSize:"cover", backgroundRepeat:"no-repeat",}} pages={3} scrolling={true} vertical ref={ref => (parallax = ref)}>
          <ButtonAppBar scroll={()=>parallax.scrollTo(2)}/>
        <ParallaxLayer offset={0} speed={1}>
            <Start matches={matches}/>
        </ParallaxLayer>
        </Parallax>
      </div>
    )
}

export default withWidth()(Home)
