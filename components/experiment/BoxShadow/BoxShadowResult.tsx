import React from 'react';
import { Box } from '@mui/material';
import styles from './BoxShadowResult.module.css';

interface BoxShadowResultProps {
  boxShadow: string;
}

export default function BoxShadowResult({boxShadow}: BoxShadowResultProps) {
  return (
    <Box className={styles.boxShadowResult} style={{boxShadow}} />
  );
}
