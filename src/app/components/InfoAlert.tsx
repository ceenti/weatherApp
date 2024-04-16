import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

interface InfoAlerProps {
  message: string;
}

export default function InfoAlert({message}: InfoAlerProps) {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity='warning'>
     {message}
    </Alert>
  );
}
