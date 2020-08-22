import React from 'react'
import { Container, Typography, Grid } from "@material-ui/core"
import styles from "./styles.module.css"
import Card from './card'
export default function work(props) {
    let reviewData=[{
        name:"Abhradip Ghosh,Tech Lead at CBNITS",
        review:"Anuswant is a very good team man. We have been working closely together for the last few months and the main quality that makes him different than others is his ability to learn and adopt new technologies very quickly. He is very curious and passionate about new trends also. He has the potential of playing a key role in the project delivery and management cycle due to his sharp and rational thought process. I would love to continue work with him in the near future and I think that he could be a valuable asset in any development team having a solid determination and mindset."
        ,side:"l",
        },
        {
            name:"Manoj Kumar,Lead Developer at TCS",
            review:"Anuswant is a nice person with good skills",
            side:"r"
        },
        {
            name:"Aditya Agarwal, Senior DevOps Engineer & SRE Professional at Genpact",
            review:"Anuswant is a very fast learner and focused developer, working with him was really a good experience.",
            side:"l"
        },
    ]
    return (
        <div>
            <Container maxWidth="xl" style={{ height:"auto" }} className={styles.work} >
                <div style={{ width: "100%", marginTop: props.ipadMatch ? "8%" : props.matches ? "20%" : "20%" }}>
                    <Typography color="secondary" style={{ fontSize: 18, marginLeft: "15%" }}>
                        {`The One Who Knows Me />`}
                    </Typography>
                    <div style={{ marginLeft: "15%" }}>
                        <Grid container spacing={3}>
                            {
                                reviewData.map((data,key)=><Grid item xs={12} lg={data.side=='r'?4:6} md={data.side=='r'?4:6} key={key}>
                                        <Card side={data.side} review={data} />
                                    </Grid>
                                )
                            }
                            {/* <Grid item xs={12} lg={4} md={4}>
                                    <Card side="l" />
                            </Grid>
                            <Grid item xs={12} lg={6} md={6}>
                                <Card side="r" />
                            </Grid>
                            <Grid item xs={12} lg={6} md={6}>
                                <Card side="l"/>
                            </Grid>
                            <Grid item xs={12} lg={4} md={4}>
                                    <Card side="l"/>
                            </Grid> */}
                        </Grid>
                    </div>
                </div>
            </Container>
        </div>
    )
}
