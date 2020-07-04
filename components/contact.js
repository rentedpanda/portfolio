import React from 'react'
import { Container, Typography, Avatar, Link } from "@material-ui/core"
import styles from "./styles.module.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => ({
    root: {
        textAlign:"left",
        padding: 5
    },
    text: {
        textAlign: "left", fontSize: "16px",
        color: "#4C16B9"
    },
    icon: {
        fontSize: "16px", position: "relative", top: "3px", right: "2px"
    },
    links: {
        textDecoration: "none !important",
        color: "#ACEFD0"
    }
}))
export default function contact(props) {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="xl" style={{ height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.7)", padding: 20 }}>
                <div style={{ width: "100%", marginTop: props.ipadMatch ? "8%" : props.matches ? "20%" : "20%" }}>
                    <Typography style={{ fontSize: 18, marginLeft: "15%", fontWeight: "normal" }} color="secondary">{`Contact />`}</Typography>
                    <div style={{ paddingLeft: "15%"}}>
                        <Typography variant="h5" style={{ fontWeight: 600 }}>
                            Find me on:
                        </Typography>
                        <div className={classes.root}>
                            <Typography className={classes.text}>
                                <Link className={classes.links} href="https://github.com/rentedpanda">
                                    <GitHubIcon className={classes.icon} /> github.com/rentedpanda
                                </Link>
                            </Typography>
                            <Typography className={classes.text}>
                                <Link className={classes.links} href="www.linkedin.com/in/rentedPanda">
                                    <LinkedInIcon className={classes.icon} /> linkedin.com/in/rentedPanda
                                </Link>
                            </Typography>
                            <Typography className={classes.text}>
                                <Link className={classes.links} href="https://www.truecaller.com/search/in/8240054295">
                                    <CallIcon className={classes.icon} /> 8240054295
                                </Link>
                            </Typography>
                            <Typography className={classes.text}>
                                <Link className={classes.links} href="https://mail.google.com/mail/u/2/#inbox">
                                    <EmailIcon className={classes.icon} /> anuswantp1998@gmail.com
                                </Link>
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
