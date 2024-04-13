import * as React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

const variants = [
  'h1',
  'h2',
  'h2',
  'h2',
  'h2',
  'h2',
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

export default function SkeletonTypography() {
  return (
    <Grid container spacing={10} p={10}>
      <Grid item md>
      <Skeleton variant="rounded" width={'100%'} height={220} />
        <TypographyDemo loading />
      </Grid>
    </Grid>
  );
}