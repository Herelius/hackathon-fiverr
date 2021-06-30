import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import { Container } from '@material-ui/core';

import './container.css';

export default function SimpleContainer() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="90%" mb="20px">
        <Typography
          component="div"
          style={{
            backgroundColor: '#1dbf73',
            height: '20vh',
            marginTop: '10px',
            borderRadius: '10px',
          }}
          display="flex"
          justifyContent="space-between"
          m={1}
          p={1}
        >
          <div className="flex-container">
            <div className="text">
              <p>Profiles that may interest you:</p>
            </div>
            <div className="card-container">
              <div className="card">1</div>
              <div className="card">2</div>
              <div className="card">3</div>
            </div>
          </div>
        </Typography>
      </Container>
    </>
  );
}
