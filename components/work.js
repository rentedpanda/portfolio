import React from 'react'
import { Container, Typography, Grid } from "@material-ui/core"
import styles from "./styles.module.css"
import Card from './card'
export default function work(props) {
    return (
        <div>
            <Container maxWidth="xl" style={{ height:"auto" }} className={styles.work} >
                <div style={{ width: "100%", marginTop: props.ipadMatch ? "8%" : props.matches ? "20%" : "20%" }}>
                    <Typography color="secondary" style={{ fontSize: 18, marginLeft: "15%" }}>
                        {`The One Who Knows Me />`}
                    </Typography>
                    <div style={{ marginLeft: "15%" }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} lg={4} md={4}>
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
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container>
        </div>
    )
}
