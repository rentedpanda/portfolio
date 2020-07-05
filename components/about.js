import React from 'react'
import { Container, Typography, StylesProvider } from "@material-ui/core"
import {makeStyles,withStyles} from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import styles from "./styles.module.css"
const useStyles = makeStyles((theme) => ({
    keywords:{
        color:"#4682B4"
     },
    variables:{
        color:"#87CEFA"
    },
    func:{
        color:"#fffa6b"
    },
    objects:{
        color:"#F29879"
    },
    brackets:{
        color:"rgba(255, 255, 255, 0.7)"
    },
    dots:{
        color:"#3b3553"
    },
    comments:{
        color:"rgba(63,56,68,1)"
    }
}));
function about(props) {
    const classes=useStyles();
const aboutar = [
    <span><span className={classes.keywords}>class</span> <span className={classes.func}>Anuswant Pandey</span> {`{`}</span>,
    <span className={classes.comments}>// I'm ambitious and love new challenges :)</span>,
    <span className={classes.comments}>// I am continously learning new skills and will grow,Peace is the ultimate goal.</span>,
    <span><span className={classes.dots}>··</span><span className={classes.func}>constructor<span className={classes.brackets}>()</span></span> {`{`}</span>,,
    <span><span className={classes.dots}>····</span><span className={classes.func}>this</span>.<span className={classes.variables}>name</span> = '<span className={classes.objects}>Anuswant Pandey</span>'</span>,
    <span><span className={classes.dots}>····</span><span className={classes.func}>this</span>.<span className={classes.variables}>dayOfBirthTimestamp</span> = <span className={classes.func}>911088000</span></span>,
    <span><span className={classes.dots}>····</span><span className={classes.func}>this</span>.<span className={classes.variables}>email</span> = '<span className={classes.objects}>anuswantp1998@gmail.com</span>'</span>,
    <span><span className={classes.dots}>··</span>{`}`}</span>,
    <span><span className={classes.dots}>··</span><span className={classes.func}>workExperience<span className={classes.brackets}>()</span></span> {`{`}</span>,
    <span><span className={classes.dots}>····</span><span className={classes.keywords}>return</span> [</span>,
    <span><span className={classes.dots}>······</span><span className={classes.objects}>{`{ '2020-now' : 'Developer at CBNITS' }`}</span></span>,
    <span><span className={classes.dots}>······</span><span className={classes.objects}>{`{ '2019-2020': 'Interning as UI/UX designer at Data Sutram' }`}</span></span>,
    <span><span className={classes.dots}>······</span><span className={classes.objects}>{`{ '2017-2019': 'Graphic Designer at Anakhronos Fest' }`}</span></span>,
    <span><span className={classes.dots}>····</span>]</span>,
    <span><span className={classes.dots}>··</span>{`}`}</span>,
    <span><span className={classes.dots}>··</span><span className={classes.func}>education<span className={classes.brackets}>()</span></span> {`{`}</span>,
    <span><span className={classes.dots}>····</span><span className={classes.keywords}>return</span> [</span>,
    <span><span className={classes.dots}>······</span><span className={classes.objects}>{`{ '2017-2020': 'Bachelors in Computer Applications at Techno India Salt Lake (MAKAUT)' }`}</span>,</span>,
    <span><span className={classes.dots}>······</span><span className={classes.objects}>{`{ '2016-2017': 'CBSE Board uptill 12th at Sudhir Memorial' }`}</span>,</span>,
    <span><span className={classes.dots}>······</span><span className={classes.objects}>{`{ '2003-2016': 'ICSE Board uptill 10th class at St.Xaviers Intitution ' }`}</span>,</span>,
    <span><span className={classes.dots}>····</span>]</span>,
    <span><span className={classes.dots}>··</span>{`}`}</span>,
    <span><span className={classes.dots}>··</span><span className={classes.func}>skills<span className={classes.brackets}>()</span></span> {`{`}</span>,
    <span><span className={classes.dots}>···</span><span className={classes.keywords}>return</span> [ <span className={classes.objects}>'HTML5.1/CSS4/JS',
    'jQuery',
    'Bootstrap/Bulma/Material Design',
    'SASS/Less','npm/yarn/bower',
    'GIT',
    'MySQL',
    'Adobe XD/Figma',
    'Photoshop',
    'After Effects',
    'UX/UI',
    'TypeScript',
    'JS',
    'Java',
    'react.js',
    'next.js',
    'Flutter',
    'react native',
    'Bootstrap/Bulma/Material Design'</span> ]</span>,
    <span><span className={classes.dots}>··</span>}</span>,
    `}`
]
    return (
        <Container maxWidth="xl" style={{ paddingTop: 10, paddingBottom: 50, paddingRight: 0, paddingLeft: 0, height: "auto", backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <div style={{ width: "100%", marginTop: props.ipadMatch ? "8%" : props.matches ? "20%" : "20%" }}>
                <Typography color="secondary" style={{ fontSize: 18, marginLeft: "15%",marginBottom:20 }}>
                    {`About />`}
                </Typography>
                <div style={{ width: "100%" }}>
                    {aboutar.map((value, key) => {
                        let index = (key + 1).toString()
                        return (
                            <div data-line-nr={index} style={{ paddingLeft: props.matches ? "15%" : "15%" ,paddingRight:"10%"}} className={styles.code}>
                                <Typography className={styles.codepara} style={{ marginBlockStart: 0, marginBlockEnd: 0, marginInline: 0, margin: 0,textAlign:"start" }}>
                                    {value}
                                </Typography>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}

export default about
