import React from "react";
import styles from "./ColorSelect.module.css"

type LabelTextProps = {
  labelText: string;
  value: string;
  handleColor: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ColorSelect = ({ labelText, value, handleColor }: LabelTextProps) => {
  return (
    <div className={styles.colorSelectGroup}>
      <label htmlFor="colorSelect">{labelText}</label>
      <input
        type="color"
        id="colorSelect"
        value={value}
        name="colorSelect"
        onChange={handleColor}
      />
    </div>
  );
};

export default ColorSelect;
