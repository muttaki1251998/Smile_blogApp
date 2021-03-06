import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});


const Landing = () => {

  const classes = useStyles();

  return (
    <div >
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  New World
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  31.07.2021
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  I've been playing this game. And it is amazing!
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
            </div>
          </Card>
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  New World
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  31.07.2021
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  I've been playing this game. And it is amazing!
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
            </div>
          </Card>
        </CardActionArea>
      </Grid>
    </div>
  );

}

export default Landing;