
import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles, StylesProvider } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Drawer,List,Divider,ListItem} from "@material-ui/core"
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
import { Link } from '@material-ui/core';
import styles from "./styles.module.css"
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
    },
    list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
        background:"linear-gradient(transparent,#141852) !important",
      },
      item:{
          justifyContent:"center !important"
      }

}));

export default function ButtonAppBar(props) {
    const matches = useMediaQuery('(min-width:750px)');
    const classes = useStyles();
    const heading = "< ANUSWANT />"
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List className={clsx(classes.mainList)}>
            {[{head:'Start />',id:"#start"},
            {head:'About />',id:"#about"},
            {head:'Testimonials />',id:"#work"},
            {head:'Contact />',id:"#contact"}].map((text, index) => (
              <ListItem className={clsx(classes.item)} key={text}>
                <Link href={text.id} className={styles.navLink}><StyledButton color="inherit"><ListItemText primary={text.head} /></StyledButton></Link>
              </ListItem>
            ))}
          </List>
        </div>
      );

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
                                    <Link className={styles.navLink} href="#start"><StyledButton color="inherit">{`Start />`}</StyledButton></Link>
                                    <Link className={styles.navLink} href="#about"><StyledButton color="inherit">{`About />`}</StyledButton></Link>
                                    <Link className={styles.navLink} href="#work"><StyledButton color="inherit">{`Testimonials />`}</StyledButton></Link>
                                    <Link className={styles.navLink} href="#contact"><StyledButton color="inherit">{`Contact />`}</StyledButton></Link>
                                </> :
                                <IButton
                                    edge="end"
                                    className={classes.menuButton}
                                    color="secondary"
                                    aria-label="menu"
                                    onClick={toggleDrawer("top", true)}
                                >
                                    <MenuIcon />
                                </IButton>
                        }
                    </Toolbar>
                </AppBar>
            </HideonScroll>
            <Drawer style={{backgroundColor:"transparent",marginTop:"56px"}} anchor={"top"} open={state["top"]} onClose={toggleDrawer("top", false)}>
                    {list("top")}
            </Drawer>
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