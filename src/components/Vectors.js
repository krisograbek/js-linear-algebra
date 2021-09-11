import { Grid, makeStyles, TextField } from '@material-ui/core';
import { all, create } from 'mathjs';
import React from 'react'
import { useState } from 'react/cjs/react.development'


const config = {}
const math = create(all, config)

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '20px'
  },
  text: {
    backgroundColor: 'secondary'
  },
  button: {
    margin: "15px"
  }
}))

function Vectors() {

  const classes = useStyles();

  const [theta0, setTheta0] = useState(1);
  const [theta1, setTheta1] = useState(1);
  const [theta2, setTheta2] = useState(2);
  const [x0, _] = useState(1);
  const [x1, setX1] = useState(1);
  const [x2, setX2] = useState(2);
  const [dot, setDot] = useState(0);
  const [proba, setProba] = useState(0);

  const computeSigmoid = (val) => {
    const newProba = 1 / (1 + math.exp(-1 * val))
    setProba(newProba)
    // console.log(sigmoid, 1 - sigmoid)
  }

  const computeDot = () => {
    const theta = math.matrix([theta0, theta1, theta2])
    const x = math.matrix([x0, x1, x2])
    const newDot = math.dot(theta, x)
    setDot(newDot);
    computeSigmoid(newDot);
  }

  return (
    <Grid container
      direction="column"
      alignItems="flex-start"
      className={classes.container}
    >
      <Grid item>
        <Grid container
          alignItems="flex-start"
          className={classes.container}
        >
          <Grid item>
            <TextField name="theta0" label="theta0" type="number"
              value={theta0}
              onInput={e => setTheta0(Number(e.target.value))}
              InputProps={{ inputProps: { min: -100, max: 100 } }}
            />
          </Grid>
          <Grid item>
            <TextField name="theta1" label="theta1" type="number"
              value={theta1}
              onInput={e => setTheta1(Number(e.target.value))}
              InputProps={{ inputProps: { min: -100, max: 100 } }}
            />
          </Grid>
          <Grid item>
            <TextField name="theta2" label="theta2" type="number"
              value={theta2}
              onInput={e => setTheta2(Number(e.target.value))}
              InputProps={{ inputProps: { min: -100, max: 100 } }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container
          alignItems="flex-start"
          className={classes.container}
        >
          <Grid item>
            <TextField name="x0" label="x0" type="number"
              value={x0}
              InputProps={{ inputProps: { min: -100, max: 100 } }}
            />
          </Grid>
          <Grid item>
            <TextField name="x1" label="x1" type="number"
              value={x1}
              onInput={e => setX1(Number(e.target.value))}
              InputProps={{ inputProps: { min: -100, max: 100 } }}
            />
          </Grid>
          <Grid item>
            <TextField name="x2" label="x2" type="number"
              value={x2}
              onInput={e => setX2(Number(e.target.value))}
              InputProps={{ inputProps: { min: -100, max: 100 } }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <h2>dot: {dot.toPrecision(6)}</h2>
        <h2>sigmoid: {proba.toPrecision(6)}</h2>
      </Grid>
      <button className={classes.button} onClick={computeDot}>Compute dot</button>
    </Grid>
  )
}

export default Vectors
