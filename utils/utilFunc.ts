// MUIからインポートしたスライドバーを使った更新関数
export const handleSliderChange =
    (setter: React.Dispatch<React.SetStateAction<number>>) =>
    (event: Event, value: number | number[]) => {
      setter(value as number);
    };

// スタイルをクコピーする関数
export const handleCopy = (copyText: string) => {
  navigator.clipboard
    .writeText(copyText)
    .then(() => {
      alert("値がクリップボードにコピーされました");
    })
    .catch((err) => {
      console.error("コピーに失敗しました", err);
    });
};
