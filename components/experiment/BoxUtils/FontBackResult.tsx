import styles from "./FontBackResult.module.css";
import React from 'react'

type FontBackResultProps = {
  fontStyleProps: React.CSSProperties;
  backStyleProps: React.CSSProperties;
}

const FontBackResult = ({fontStyleProps, backStyleProps}: FontBackResultProps) => {
  return (
    <div className={styles.fontBackResult}>
      <div className={styles.fontGroup} style={backStyleProps}>
        <p style={fontStyleProps}>1 2 3 4 5</p>
        <p style={fontStyleProps}>あ い う え お</p>
        <p style={fontStyleProps}>春 夏 秋 冬</p>
        <p style={fontStyleProps}>a A b B</p>
      </div>
    </div>
  )
}

export default FontBackResult
