import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import firebaseApp from '../firebase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as Ln } from 'react-router-dom';


const styles = theme => ({
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
});

class Navbar extends React.Component {

  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged(user => {
      this.props.signIn(user);
    })
  }

  renderNav() {
    const { classes } = this.props;
    if (this.props.auth.isSignedIn) {
      return (
        <React.Fragment>
          <Toolbar className={classes.toolbar}>
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
            <Button variant="outlined" size="small" onClick={()=>this.props.signOut()}>
              Logout
            </Button>
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
    else {
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
            <Ln style={{ textDecoration: 'none', paddingRight: '10px' }} to="/register">
              <Button variant="outlined" size="small">
                Sign up
              </Button>
            </Ln>
            <Ln style={{ textDecoration: 'none' }} to="/login">
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
  }

  render() {
    return (
      <div>
        {this.renderNav()}
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps, { signIn, signOut })(withStyles(styles)(Navbar));