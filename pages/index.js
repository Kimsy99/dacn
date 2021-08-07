import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DACN</title>
        <meta name="description" content="Data Analytics Consultancy Network" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Data Analytics Consultancy Network</h1>

        <p className={styles.description}>
          Towards a more data driven Malaysia with student & local business
        </p>
        <p className="">-A non-profit organization-</p>
      </main>
    </div>
  );
}
