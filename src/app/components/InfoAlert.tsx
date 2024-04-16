import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

interface InfoAlerProps {
  message: string;
  severity: string;
}

export default function InfoAlert({message, severity}: InfoAlerProps) {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity='success'>
     {message}
    </Alert>
  );
}
