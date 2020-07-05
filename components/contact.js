import React from 'react'
import { Container, Typography, Avatar, Link, Grid } from "@material-ui/core"
import styles from "./styles.module.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "left",
        padding: 5,
    },
    text: {
        textAlign: "left", fontSize: "16px",
        color: "#4C16B9",
        fontWeight: "lighter",
        lineHeight: "1.8",
        letterSpacing: "1.5px",
    },
    icon: {
        fontSize: "16px", position: "relative", top: "3px", right: "2px"
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}))
export default function contact(props) {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="xl" style={{ height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.7)", padding: 20 }}>
                <div style={{ width: "100%", marginTop: props.ipadMatch ? "8%" : props.matches ? "20%" : "20%" }}>
                    <Typography style={{ fontSize: 18, marginLeft: "15%", fontWeight: "normal" }} color="secondary">{`Contact />`}</Typography>
                    <div style={{ paddingLeft: "15%", height: props.matches ? "40vh" : props.ipad ? "75vh" : "65vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} lg={6} md={6} xl={6}>
                                <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Avatar alt="Remy Sharp" src="me.jpg" className={classes.large} />

                                </div>
                            </Grid>
                            <Grid item xs={12} lg={6} md={6} xl={6}>
                                <Typography variant="h5" style={{ fontWeight: 600 }}>
                                    Find me on:
                        </Typography>
                                <div className={classes.root}>
                                    <Typography className={classes.text}>
                                        <Link className={styles.links} href="https://github.com/rentedpanda">
                                            <GitHubIcon className={classes.icon} /> github.com/rentedpanda
                                </Link>
                                    </Typography>
                                    <Typography className={classes.text}>
                                        <Link className={styles.links} href="www.linkedin.com/in/rentedPanda">
                                            <LinkedInIcon className={classes.icon} /> linkedin.com/in/rentedPanda
                                </Link>
                                    </Typography>
                                    <Typography className={classes.text}>
                                        <Link className={styles.links} href="https://www.truecaller.com/search/in/8240054295">
                                            <CallIcon className={classes.icon} /> 8240054295
                                </Link>
                                    </Typography>
                                    <Typography className={classes.text}>
                                        <Link className={styles.links} href="https://mail.google.com/mail/u/2/#inbox">
                                            <EmailIcon className={classes.icon} /> anuswantp1998@gmail.com
                                </Link>
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container>
        </div>
    )
}
