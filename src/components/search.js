// eslint-disable-next-line import/no-duplicates
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
// import axios from 'axios';
// eslint-disable-next-line import/no-duplicates
// import { useEffect, useState } from 'react';
// import API from '../APICLient';

// const { CancelToken } = axios;

// const [error, setError] = useState('');

// route
/*
const useGet = () => {
  const source = CancelToken.source();
  setLoadingMessages(true);
  API.get('/contact', { cancelToken: source.token })
    .then((res) => {
      // setMessages(res.data);
      setShowMessages(
        <div>
          <ul>
            {res.data.map((msg, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index} className="message mb-2">
                {`De ${msg.user} : ${msg.input}`}
              </li>
            ))}
          </ul>
        </div>
      );
    })
    .catch(handleError)
    .finally(() => {
      if (
        !(
          source.token.reason &&
          source.token.reason.message === 'request cancelled'
        )
      )
        setLoadingMessages(false);
    });
  return () => {
    source.cancel('request cancelled');
  };
};

const handleError = (err) => {
  if (!axios.isCancel(err))
    setError('Something bad happened, sorry for the inconvenience');
};

useEffect(() => {
  useGet();
}, []);
*/
// ******************************************************************

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
    <Container
      className={classes.bckColor}
      style={{ marginRight: '20px' }}
      maxWidth="90%"
      mb="20px"
    >
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          label="Search by tech"
          id="margin-dense"
          className={classes.textField}
          helperText=""
          style={{ paddingBottom: '20px' }}
        />
      </form>
    </Container>
  );
}
