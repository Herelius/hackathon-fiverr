import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SimpleContainer() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="90%">
        <Typography
          component="div"
          style={{
            backgroundColor: '#cfe8fc',
            height: '20vh',
            marginTop: '10px',
            borderRadius: '10px',
          }}
        />
      </Container>
    </>
  );
}
