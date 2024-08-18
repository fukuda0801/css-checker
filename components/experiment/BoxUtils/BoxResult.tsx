import React from 'react';
import { Box } from '@mui/material';
import styles from './BoxResult.module.css';

interface BoxShadowResultProps {
  styleProps: React.CSSProperties;
}

export default function BoxShadowResult({styleProps}: BoxShadowResultProps) {
  return (
    <Box className={styles.boxShadowResult} style={styleProps} />
  );
}
