import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
export const StyledButton = withStyles({
    root:{
        '&:hover': {
            background: "transparent",
            color:"#5CDB95"
         },
         marginRight:7
    },
    label: {
      textTransform: 'capitalize',
      fontSize:22,
      fontWeight:"bold"
    },
  })(Button);