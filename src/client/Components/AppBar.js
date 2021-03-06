import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
      marginBottom:'25px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign:'left'
  },
}));

const AppBarCustom = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            LetsVenture
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default AppBarCustom;
