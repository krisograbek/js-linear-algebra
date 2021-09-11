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

function Iris() {

  const classes = useStyles();


  const [coefs0, setCoefs0] = useState([18.87514, -4.58614, -2.24129]);
  // const [coefs1, setCoefs1] = useState([6.38443, 0.16068, -2.1586]);
  // const [coefs2, setCoefs2] = useState([-25.25958, 4.42546, 4.3999]);
  const [x0, _] = useState(1);
  const [x1, setX1] = useState(2.576);
  const [x2, setX2] = useState(3.15);
  const [dot0, setDot0] = useState(0);
  // const [dot1, setDot1] = useState(0);
  // const [dot2, setDot2] = useState(0);
  const [proba, setProba] = useState(0);

  const computeSigmoid = (val) => {
    const newProba = 1 / (1 + math.exp(-1 * val))
    setProba(newProba)
    // console.log(sigmoid, 1 - sigmoid)
  }

  const computeDot = () => {
    const theta = math.matrix(coefs0)
    const x = math.matrix([x0, x1, x2])
    const newDot = math.dot(theta, x)
    setDot0(newDot);
    computeSigmoid(newDot);
  }

  const updateCoefs0 = (val, id) => {
    const newTheta = coefs0;
    newTheta[id] = val;
    console.table(newTheta)
    setCoefs0(newTheta);
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
            <TextField name="theta00" label="theta00" type="number"
              value={coefs0[0]}
              onInput={e => updateCoefs0(Number(e.target.value, 0))}
              InputProps={{ inputProps: { min: -100, max: 100 } }}
            />
          </Grid>
          <Grid item>
            <TextField name="theta01" label="theta01" type="number"
              value={coefs0[1]}
              onInput={e => updateCoefs0(Number(e.target.value), 1)}
              InputProps={{ inputProps: { min: -100, max: 100 } }}
            />
          </Grid>
          <Grid item>
            <TextField name="theta02" label="theta02" type="number"
              value={coefs0[2]}
              onInput={e => updateCoefs0(Number(e.target.value), 2)}
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
        <h2>dot: {dot0.toPrecision(6)}</h2>
        <h2>sigmoid: {proba.toPrecision(6)}</h2>
      </Grid>
      <button className={classes.button} onClick={computeDot}>Compute dot</button>
    </Grid>
  )
}

export default Iris
