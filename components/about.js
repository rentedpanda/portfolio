import React from 'react'
import { Container, Typography, StylesProvider } from "@material-ui/core"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import styles from "./styles.module.css"
const aboutar = [
    `class Anuswant Pandey {`,
    `// I'm ambitious and love new challenges :)`,
    `// I am continously learning new skills and will grow,Peace is the ultimate goal.`,
    `··constructor() {`,
    `····this.name = 'Anuswant Pandey'`,
    `····this.dayOfBirthTimestamp = 602745592`,
    `····this.email = 'anuswantp1998@gmail.com'`,
    `··}`,
    `··workExperience() {`,
    `····return [`,
    `······{ '2020-now' : 'Developer at CBNITS' }`,
    `······{ '2019-2020': 'Interning as UI/UX designer at Data Sutram' }`,
    `······{ '2017-2019': 'Graphic Designer at Anakhronos Fest' }`,
    `····]`,
    `··}`,
    `··education() {`,
    `····return [`,
    `······{ '2017-2020': 'Bachelors in Computer Applications at Techno India Salt Lake (MAKAUT)' },`,
    `······{ '2016-2017': 'CBSE Board uptill 12th at Sudhir Memorial' },`,
    `······{ '2003-2016': 'ICSE Board uptill 10th class at St.Xaviers Intitution ' },`,
    `····]`,
    `··}`,
    `··skills() {`,
    `···return [ 'HTML5.1/CSS4/JS','jQuery',
     'Bootstrap/Bulma/Material Design','SASS/Less', 
     'npm/yarn/bower','GIT','MySQL','Adobe XD/Figma',
     'Photoshop','After Effects', 
     'UX/UI','TypeScript', 'JS','Java','react.js','next.js','Flutter','react native','Bootstrap/Bulma/Material Design']`,
    `··}`,
    `}`
]
function about(props) {
    return (
        <Container maxWidth="xl" style={{ paddingTop: 10, paddingBottom: 50, paddingRight: 0, paddingLeft: 0, height: "auto", backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <div style={{ width: "100%", marginTop: props.ipadMatch ? "8%" : props.matches ? "20%" : "20%" }}>
                <Typography color="secondary" style={{ fontSize: 18, marginLeft: "15%" }}>
                    {`About />`}
                </Typography>
                <div style={{ width: "100%"}}>
                {aboutar.map((value,key) => {
                        let index=(key+1).toString()
                        return (
                            <div data-line-nr={index} style={{paddingLeft:props.matches?"15%":"15%"}} className={styles.code}>
                                <Typography className={styles.codepara} style={{marginBlockStart:0,marginBlockEnd:0,marginInline:0,margin:0}}>
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
