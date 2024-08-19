import { useState } from "react";
import InputSlider from "../../../components/experiment/BoxUtils/InputSlider";
import BoxShadowResult from "../../../components/experiment/BoxUtils/BoxResult";
import styles from "./boxShadow.module.css";
import { Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from "@mui/material/Tooltip";
import { handleCopy, handleSliderChange } from "../../../utils/utilFunc";

export default function BoxShadowExperiment() {
  const [horizon, setHorizon] = useState(0);
  const [vertical, setVertical] = useState(0);
  const [blur, setBlur] = useState(50);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#000000");

  const handleResetBoxShadow: () => void = () => {
    setHorizon(0);
    setVertical(0);
    setBlur(50);
    setSpread(0);
    setColor("#000000");
  };

  const boxShadow = {
    boxShadow: `${horizon}px ${vertical}px ${blur}px ${spread}px ${color}`,
  };
  const boxShadowStyle = `box-shadow: ${boxShadow.boxShadow};`;

  return (
    <section className={styles.boxShadowContent}>
      <div className={styles.boxShadowGroup}>
        <h2>box-shadow</h2>
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
        <div className={styles.copyGroup}>
          <p>{boxShadowStyle}</p>
          <Tooltip title="Copy">
            <ContentCopyIcon onClick={() => handleCopy(boxShadowStyle)} className={styles.copyIcon} />
          </Tooltip>
        </div>
      </div>

      <div className={styles.boxShadowResult}>
        <BoxShadowResult styleProps={boxShadow} />
      </div>
    </section>
  );
}
