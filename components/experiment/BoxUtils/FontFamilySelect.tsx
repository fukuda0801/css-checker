import styles from "./FontFamilySelect.module.css";
import React from "react";

type FontFamilySelectProps = {
  value: string;
  handleFamily: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const FontFamilySelect = ({ value, handleFamily }: FontFamilySelectProps) => {
  return (
    <div className={styles.fontFamilyGroup}>
      <label htmlFor="fontFamily">文字の種類</label>
      <select
        name="fontFamily"
        id="fontFamily"
        value={value}
        onChange={handleFamily}
      >
        <option value="serif">serif</option>
        <option value="sans-serif">sans-serif</option>
        <option value="cursive">cursive</option>
        <option value="fantasy">fantasy</option>
        <option value="monospace">monospace</option>
        <option value="Arial">Arial</option>
      </select>
    </div>
  );
};

export default FontFamilySelect;
