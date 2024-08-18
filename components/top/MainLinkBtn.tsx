import React from "react";
import styles from "./MainLinkBtn.module.css";

const MainLinkBtn = () => {
  return (
    <div className={styles.introductionContent}>
      <h1>CSS Checker</h1>
      <p>
        このサイトは、左側のサイドバーに表示されているCSSプロパティをクリックすると、そのプロパティの値を実際に変更しながら、
        結果を<span>リアルタイム</span>で確認できるツールです。ユーザーは、例えばborder-radiusやbox-shadowなどのプロパティを選択し、
        スライダーや入力フィールドを使って値を調整することで、どのようにスタイルが変わるかを<span>視覚的</span>に確認することができます。
        さらに、調整したスタイルのコードはその場で<span>コピー</span>できるようになっており、簡単に他のプロジェクトに適用することができます。<br />
        アカウント登録をすると、作成したデータを保存することができます。
      </p>
      <div className={styles.introButtonGroup}>
        <button>ログイン</button>
        <button>新規登録</button>
      </div>
    </div>
  );
};

export default MainLinkBtn;
