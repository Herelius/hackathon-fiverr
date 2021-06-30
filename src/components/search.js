import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '20px',
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
  bckColor: {
    margin: theme.spacing(3),
    backgroundColor: '#1dbf73',
    borderRadius: '10px',
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <Container className={classes.bckColor} maxWidth="90%" mb="20px">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          label="Search by tech"
          id="margin-dense"
          className={classes.textField}
          helperText=""
          margin="dense"
          style={{ paddingBottom: '20px' }}
        />
      </form>
    </Container>
  );
}
