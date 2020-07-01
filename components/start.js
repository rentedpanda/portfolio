import React from 'react'
import {Container, Typography} from "@material-ui/core"
import styles from "./styles.module.css"
import theme from "../src/theme"
import Develop from "./dencrypyText"
export default function start(props) {
    return (
        <Container className={styles.start} maxWidth="xl">
              <div className={styles.pageHeaderStart}>
              <div>
                <Typography style={{fontSize:18,fontWeight:"normal"}} color="secondary">{`Start />`}</Typography>
              </div>
              <div style={{marginTop:10}}>
                <Typography style={{fontWeight:600, fontSize:props.matches?48:30}}>
                  Hi, my name in <span style={{color:theme.palette.secondary.main}} >Anuswant Pandey</span> 
                </Typography>
                <Typography style={{fontWeight:600, fontSize:props.matches?48:30}}>
                  i <span style={{fontFamily:"Lato",fontWeight:"normal", fontStyle:"italic"}}>design</span> and develop {<Develop/>}
                </Typography>
              </div>
              </div>
              </Container>
    )
}