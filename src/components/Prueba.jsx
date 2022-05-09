import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';


export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Button>1</Button>
        </Grid>
        <Grid item xs={6}>
          <Button>2</Button>
        </Grid>
        <Grid item xs={6}>
          <Button>3</Button>
        </Grid>
        <Grid item xs={6}>
          <Button>4</Button>
        </Grid>
        <Grid item xs={6}>
          <Button>5</Button>
        </Grid>
      </Grid>
    </Box>
  );
}