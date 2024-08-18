import { useState } from "react";
import InputSlider from "../../../components/experiment/BoxUtils/InputSlider";
import BoxShadowResult from "../../../components/experiment/BoxUtils/BoxResult";
import styles from "./boxShadow.module.css";
import { Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from '@mui/material/Tooltip';

export default function BoxShadowExperiment() {
  const [horizon, setHorizon] = useState(0);
  const [vertical, setVertical] = useState(0);
  const [blur, setBlur] = useState(50);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#000000");

  const handleSliderChange =
    (setter: React.Dispatch<React.SetStateAction<number>>) =>
    (event: Event, value: number | number[]) => {
      setter(value as number);
    };

  const handleResetBoxShadow: () => void = () => {
    setHorizon(0);
    setVertical(0);
    setBlur(50);
    setSpread(0);
    setColor("#000000");
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(boxShadowStyle)
      .then(() => {
        alert("値がクリップボードにコピーされました");
      })
      .catch((err) => {
        console.error("コピーに失敗しました", err);
      });
  };

  const boxShadow = {
    boxShadow: `${horizon}px ${vertical}px ${blur}px ${spread}px ${color}`,
  }
  const boxShadowStyle = `box-shadow: ${boxShadow.boxShadow};`;
  
  return (
    <section className={styles.boxShadowContent}>
      <div className={styles.boxShadowGroup}>
        <InputSlider
          max={100}
          min={-100}
          defaultValue={0}
          label="横方向"
          value={horizon}
          onChange={handleSliderChange(setHorizon)}
        />
        <InputSlider
          max={100}
          min={-100}
          defaultValue={0}
          label="縦方向"
          value={vertical}
          onChange={handleSliderChange(setVertical)}
        />
        <InputSlider
          max={100}
          min={0}
          defaultValue={50}
          label="ぼかし"
          value={blur}
          onChange={handleSliderChange(setBlur)}
        />
        <InputSlider
          max={100}
          min={-100}
          defaultValue={0}
          label="広がり"
          value={spread}
          onChange={handleSliderChange(setSpread)}
        />
        <div className={styles.colorPickerGroup}>
          <label htmlFor="color">影の色</label>
          <input
            type="color"
            id="color"
            name="shadowColor"
            className={styles.colorPicker}
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <Button
            variant="outlined"
            color="success"
            onClick={handleResetBoxShadow}
          >
            リセット
          </Button>
        </div>
        <div></div>
        <div className={styles.copyGroup}>
          <p>{boxShadowStyle}</p>
          <Tooltip title="Copy">
            <ContentCopyIcon onClick={handleCopy} className={styles.copyIcon} />
          </Tooltip>
        </div>
      </div>

      <div className={styles.boxShadowResult}>
        <BoxShadowResult styleProps={boxShadow} />
      </div>
    </section>
  );
}
