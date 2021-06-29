import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Grid from './Grid';

export default function SimpleContainer() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="90%">
        <Typography
          component="div"
          style={{
            backgroundColor: '#1dbf73',
            height: '20vh',
            marginTop: '10px',
            borderRadius: '10px',
          }}
          display="flex"
          justifyContent="flex-start"
          m={1}
          p={1}
        >
          <div>
            <Grid />
          </div>
        </Typography>
      </Container>
    </>
  );
}
