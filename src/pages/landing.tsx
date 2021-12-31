import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
    width: "100vw",
  },
  image: { objectFit: 'contain' },
  paper: {
    width: "100vw",
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper} variant="outlined">
        <img
          className={classes.image}
          alt="Overview of Aalesund"
          src="https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,q_65,w_1600/v1/clients/norway/2-1_a0f3397e-7f00-4103-843a-6af504f3d445.jpg"
        />
      </Paper>
    </Container>
  );
};

export default Landing;
