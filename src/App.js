import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

import './App.css'

const useStyles = makeStyles(
  (theme) => ({
    root: {
      color: 'blue',
    },
    name: {
      color: theme.palette.secondary.main,
      fontWeight: (props) => props.fontWeight,
    },
  }),
  {name: 'Person'},
)

function App() {
  const classes = useStyles({fontWeight: 'bold'})

  return (
    <div className={classes.root}>
      <div className={classes.name}>khanh pham</div>

      <div className={classes.root}>
        <div className={classes.name}>nam tran</div>
      </div>
    </div>
  )
}

export default App;
