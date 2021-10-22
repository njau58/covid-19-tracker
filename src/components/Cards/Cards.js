import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from 'classnames';


const Cards = (props) => {






  return (
    <div className={styles.container}>
   
      <Grid container spacing={3} justifyContent="center">
        <Grid item component={Card}  xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography color="textSecondary"></Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data.confirmed}
              
                
                duration={2.0}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(props.data.lastUpdated).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}  xs={12} md={3} className = {cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography color="textSecondary"></Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data.recovered}
                duration={2.0}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">   {new Date(props.data.lastUpdated).toDateString()}</Typography>
            <Typography variant="body2">
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}  xs={12} md={3} className = {cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography color="textSecondary"></Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data.deaths}
                duration={2.0}
                separator=","
              />
            </Typography>
         
            <Typography color="textSecondary">   {new Date(props.data.lastUpdated).toDateString()}</Typography>
            <Typography variant="body2">Number of COVID-19 deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
