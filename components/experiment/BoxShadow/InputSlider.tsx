import { Slider, Typography } from "@mui/material";
import React from "react";
import styles from "./InputSlider.module.css";

type InputSlider = {
  value: number;
  onChange: (event: Event, value: number | number[]) => void;
  max: number;
  min: number;
  defaultValue: number;
  label: string;
};

const InputSlider = ({ value, onChange, max, min, defaultValue, label }: InputSlider) => {
  return (
    <div className={styles.inputSliderGroup}>
      <Typography className={styles.inputSliderLabel}>{label}</Typography>
      <Slider
        value={value}
        onChange={onChange}
        max={max}
        min={min}
        defaultValue={defaultValue}
        step={1}
        valueLabelDisplay="on"
        className={styles.inputSlider}
      />
    </div>
  );
};

export default InputSlider;
