import BoxShadowResult from "../../../components/experiment/BoxUtils/BoxResult";
import InputSlider from "../../../components/experiment/BoxUtils/InputSlider";
import styles from "./borderRadius.module.css";
import React, { useState } from "react";
import { Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from "@mui/material/Tooltip";

const BorderRadius = () => {
  const [boxWidth, setBoxWidth] = useState(50);
  const [boxHeight, setBoxHeight] = useState(50);
  const [borderRad, setBorderRad] = useState(15);
  const [borderThick, setBorderThick] = useState(2);
  const [borderType, setBorderType] = useState("solid");
  const [borderColor, setBorderColor] = useState("#000000");

  const handleSliderChange =
    (setter: React.Dispatch<React.SetStateAction<number>>) =>
    (event: Event, value: number | number[]) => {
      setter(value as number);
    };

  const borderStyle = {
    width: `${boxWidth}px`,
    height: `${boxHeight}px`,
    border: `${borderThick}px ${borderType} ${borderColor}`,
    borderRadius: `${borderRad}px`,
  };

  const handleResetBorder = () => {
    setBoxWidth(50);
    setBoxHeight(50);
    setBorderRad(15);
    setBorderThick(2);
    setBorderType("solid");
    setBorderColor("#000000");
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

  return (
    <section className={styles.borderRadiusContent}>
      <div className={styles.borderRadiusGroup}>
        <InputSlider
          max={300}
          min={1}
          defaultValue={50}
          label="横幅"
          value={boxWidth}
          onChange={handleSliderChange(setBoxWidth)}
        />
        <InputSlider
          max={300}
          min={1}
          defaultValue={50}
          label="縦幅"
          value={boxHeight}
          onChange={handleSliderChange(setBoxHeight)}
        />
        <InputSlider
          max={100}
          min={1}
          defaultValue={0}
          label="丸み"
          value={borderRad}
          onChange={handleSliderChange(setBorderRad)}
        />
        <InputSlider
          max={10}
          min={1}
          defaultValue={1}
          label="太さ"
          value={borderThick}
          onChange={handleSliderChange(setBorderThick)}
        />

        <div className={styles.borderTypeGroup}>
          <label htmlFor="borderTypeSelect">枠線</label>
          <select
            name="borderColor"
            id="borderTypeSelect"
            value={borderType}
            onChange={(e) => setBorderType(e.target.value)}
          >
            <option value="solid">solid</option>
            <option value="double">double</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="groove">groove</option>
            <option value="ridge">ridge</option>
          </select>
        </div>

        <div className={styles.borderColorSelect}>
          <label htmlFor="borderColor">色</label>
          <input
            type="color"
            id="borderColor"
            name="borderColor"
            value={borderColor}
            onChange={(e) => setBorderColor(e.target.value)}
          />
          <Button
            variant="outlined"
            color="success"
            onClick={handleResetBorder}
          >
            リセット
          </Button>
        </div>

        <div className={styles.copyBorderGroup}>
          {Object.entries(borderStyle).map((value, index) => {
            return (
              <div key={index}>
                <p>
                  <span>{value[0]}: </span>
                  {value[1]};
                </p>
                <Tooltip title="Copy">
                  <ContentCopyIcon
                    onClick={() => handleCopy(`${value[0]}: ${value[1]};`)}
                    className={styles.copyIcon}
                  />
                </Tooltip>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.borderRadiusResult}>
        <BoxShadowResult styleProps={borderStyle} />
      </div>
    </section>
  );
};

export default BorderRadius;
