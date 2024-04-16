import * as React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

const variants = [
  'h1',
] as readonly TypographyProps['variant'][];

function TypographyDemo(props: { loading?: boolean }) {
  const { loading = false } = props;

  return (
    <div>
      {variants.map((variant,i) => (
        <Typography component="div" key={i} variant={variant}>
          {loading ? <Skeleton /> : variant}
        </Typography>
      ))}
    </div>
  );
}

export default function LoadingSkeletonMain() {
  return (
    <Grid container spacing={12} p={12}>
      <Grid item md>
      <Skeleton variant="rounded" width={'100%'} height={420} />
      </Grid>
    </Grid>
  );
}