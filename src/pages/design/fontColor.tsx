import React, { useState } from "react";
import styles from "./fontColor.module.css";
import ColorSelect from "../../../components/experiment/BoxUtils/ColorSelect";
import InputSlider from "../../../components/experiment/BoxUtils/InputSlider";
import FontFamilySelect from "../../../components/experiment/BoxUtils/FontFamilySelect";
import FontBackResult from "../../../components/experiment/BoxUtils/FontBackResult";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";

const FontColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [fontColor, setFontColor] = useState("#000000");
  const [fontWeight, setFontWeight] = useState(500);
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState("sans-serif");

  const handleSliderChange =
    (setter: React.Dispatch<React.SetStateAction<number>>) =>
    (event: Event, value: number | number[]) => {
      setter(value as number);
    };

  const handleResetFont = () => {
    setBackgroundColor("#ffffff");
    setFontColor("#000000");
    setFontWeight(500);
    setFontSize(16);
    setFontFamily("sans-serif");
  };

  const handleCopy = (styleProp: string) => {
    navigator.clipboard
      .writeText(styleProp)
      .then(() => {
        alert("値がクリップボードにコピーされました");
      })
      .catch((err) => {
        console.error("コピーに失敗しました", err);
      });
  };

  const backGround = {
    backgroundColor: `${backgroundColor}`,
  };

  const backGroundStyle = `background-color: ${backGround.backgroundColor};`;

  const font = {
    font: `${fontWeight} ${fontSize}px ${fontFamily}`,
    color: fontColor,
  };

  const fontStyle = `font: ${fontWeight}px ${fontSize}px ${fontFamily};`;
  const fontColorStyle = `color: ${fontColor};`

  return (
    <section className={styles.fontBackContent}>
      <div className={styles.fontBackGroup}>
        <h2>font</h2>
        <ColorSelect
          labelText="背景色"
          value={backgroundColor}
          handleColor={(e) => setBackgroundColor(e.target.value)}
        />
        <ColorSelect
          labelText="文字色"
          value={fontColor}
          handleColor={(e) => setFontColor(e.target.value)}
        />
        <InputSlider
          value={fontWeight}
          onChange={handleSliderChange(setFontWeight)}
          max={900}
          min={100}
          defaultValue={400}
          label="文字の太さ"
        />
        <InputSlider
          value={fontSize}
          onChange={handleSliderChange(setFontSize)}
          max={32}
          min={1}
          defaultValue={16}
          label="文字の大きさ"
        />

        <div className={styles.fontReset}>
          <FontFamilySelect
            value={fontFamily}
            handleFamily={(e) => setFontFamily(e.target.value)}
          />
          <Button variant="outlined" color="success" onClick={handleResetFont}>
            リセット
          </Button>
        </div>

        <div className={styles.copyGroup}>
          <div className={styles.copyBack}>
            <p>{backGroundStyle}</p>
            <Tooltip title="Copy">
              <ContentCopyIcon
                onClick={() => handleCopy(backGroundStyle)}
                className={styles.copyIcon}
              />
            </Tooltip>
          </div>

          <div className={styles.copyFont}>
            <p>{fontStyle}</p>
            <Tooltip title="Copy">
              <ContentCopyIcon
                onClick={() => handleCopy(fontStyle)}
                className={styles.copyIcon}
              />
            </Tooltip>
          </div>

          <div className={styles.copyFont}>
            <p>{fontColorStyle}</p>
            <Tooltip title="Copy">
              <ContentCopyIcon
                onClick={() => handleCopy(fontColorStyle)}
                className={styles.copyIcon}
              />
            </Tooltip>
          </div>
        </div>
      </div>

      <div className={styles.fontBackResult}>
        <FontBackResult fontStyleProps={font} backStyleProps={backGround} />
      </div>
    </section>
  );
};

export default FontColor;
