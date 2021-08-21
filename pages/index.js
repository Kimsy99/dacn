import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HomeBanner from "../components/HomeBanner.component";
import ProjectBanners from "../components/ProjectBanners.component";
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
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link href="/client">
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md home-btn-1 md:py-4 md:text-lg md:px-10 hover:ring-4 ">
                For Client
              </a>
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link href="/student">
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md home-btn-2 md:py-4 md:text-lg md:px-10 hover:ring-4">
                For Students
              </a>
            </Link>
          </div>
        </div>
        <br />
        <HomeBanner />
        {/* <ProjectBanners /> */}
      </main>
    </div>
  );
}
