
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { StyledButton } from "./button"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import theme from "../src/theme"
import HideonScroll from "./hideOnScroll"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appbar:{
        background: "linear-gradient(#273c75, transparent)"
    }
}));

export default function ButtonAppBar(props) {
    const matches = useMediaQuery('(min-width:750px)');
    const classes = useStyles();
    const heading = "< ANUSWANT />"
    return (
        <div className={classes.root}>
            <HideonScroll threshold={100}>
                <AppBar className={classes.appbar}  elevation={0}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            {heading}
                        </Typography>
                        {
                            matches ?
                                <>
                                    <StyledButton color="inherit">{`Start />`}</StyledButton>
                                    <StyledButton color="inherit">{`Work />`}</StyledButton>
                                    <StyledButton color="inherit">{`About />`}</StyledButton>
                                    <StyledButton color="inherit">{`Contact />`}</StyledButton>
                                </> :
                                <IButton
                                    edge="end"
                                    className={classes.menuButton}
                                    color="secondary"
                                    aria-label="menu"
                                // onClick={counter.toggle}
                                >
                                    <MenuIcon />
                                </IButton>
                        }
                    </Toolbar>
                </AppBar>
            </HideonScroll>
        </div>
    );
}
const IButton = withStyles({
    root: {
        '&:hover': {
            background: "transparent",
            color: theme.palette.secondary.light
        },
    },
})(IconButton);