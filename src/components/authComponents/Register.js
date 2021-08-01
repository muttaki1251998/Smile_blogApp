import React, { useState, useEffect } from 'react';
import { Link as Ln, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import firebaseApp from '../../firebase';
import { signIn } from '../../actions';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = () => {
  const classes = useStyles();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const createUser = (event) => {
    event.preventDefault();
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log(userCredential);
        userCredential.user.updateProfile({
          displayName: displayName
        }).then(() => {
          dispatch(signIn(userCredential.user));
        });
        history.push('/dashboard');
        firebaseApp.firestore().collection("Users").doc(firebaseApp.auth().currentUser.uid)
          .set({ displayName, email })
          .then(() => {
            // registration successful
            console.log("New user added to database");
          })
          .catch(error => {
            console.log("Error writing to database: ", error);
          })
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={e => createUser(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12} xs={12}>
              <TextField
                value={displayName}
                onChange={e => setDisplayName(e.target.value)}
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={email}
                onChange={e => setEmail(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={password}
                onChange={e => setPassword(e.target.value)}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Ln to="/login"><Link  variant="body2">
                Already have an account? Sign in
              </Link>
              </Ln>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Register;