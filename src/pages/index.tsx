import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "./home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>gabriel11447</title>
      </Head>
      <main>
        <section className={styles.about}>
          <Image
            height="100%"
            width="100%"
            objectFit="cover"
            src="https://github.com/gabriel11447.png"
            alt="gabriel11447"
          />
          <div className={styles.description}>
            <h1>Gabriel de Carvalho</h1>
            <span>
              I am a Computer Science undergraduate student at UNESP and intern
              React Native developer at PECEGE.
            </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
