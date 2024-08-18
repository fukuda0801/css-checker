import Head from "next/head";
import { Inter } from "next/font/google";
import MainLinkBtn from "../../components/top/MainLinkBtn";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>CSS Checker</title>
        <meta name="description" content="視覚的にCSSのプロパティを作成することができるサイトです。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mainPage">
        <MainLinkBtn />
      </main>
    </>
  );
}
