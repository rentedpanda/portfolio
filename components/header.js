
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {StyledButton} from "./button"
import HideonScroll from "./hideOnScroll"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "linear-gradient(#273c75, transparent)"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  show: {
    transform: 'translateY(1)',
    transition: 'transform .5s',
  },
  hide: {
    transform: 'translateY(-110%)',
    transition: 'transform .5s',
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
    const heading="< ANUSWANT />"
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
           {heading}
          </Typography>
          <StyledButton onClick={props.scroll} color="inherit">{`Start />`}</StyledButton>
          <StyledButton color="inherit">{`Work />`}</StyledButton>
          <StyledButton color="inherit">{`About />`}</StyledButton>
          <StyledButton color="inherit">{`Contact />`}</StyledButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}