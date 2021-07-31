import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as Ln } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const Navigation = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Smile
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Ln style={{textDecoration:'none', paddingRight: '10px'}} to="/register">
        <Button variant="outlined" size="small">
          Sign up
        </Button>
        </Ln>
        <Ln style={{textDecoration:'none'}} to="/login">
          <Button variant="outlined" size="small">
            Sign in
          </Button>
        </Ln>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        <Link
          color="inherit"
          noWrap
          variant="body2"
          href='/'
          className={classes.toolbarLink}
        >
          Home
        </Link>
      </Toolbar>
    </React.Fragment>
  );
}

export default Navigation;