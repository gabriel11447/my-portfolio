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
            className={styles.photo}
          />
          <div className={styles.description}>
            <h1>Gabriel de Carvalho</h1>
            <span>
              I am a Computer Science undergraduate student at UNESP and intern
              React Native developer at PECEGE.
            </span>
          </div>
        </section>
        <section className={styles.skills}>
          <h1>Skills</h1>
          <span className={styles.skillList}>
            <div className={styles.skill}></div>
            <div className={styles.skill}></div>
            <div className={styles.skill}></div>
            <div className={styles.skill}></div>
          </span>
        </section>
        <section className={styles.projects}>
          <h1>Projects</h1>
          <span className={styles.projectsContainer}>
            <div className={styles.card}>
              <Image
                height="318px"
                width="318px"
                objectFit="cover"
                src="https://play-lh.googleusercontent.com/mSSKcCbyWSHVsZGkh10A8A48ZNy1DGloA5Y7S8le6TTMIr2gE-NOTmK_nyh3bmNHGQ=s180-rw"
                alt="oráculo"
              />
            </div>
          </span>
        </section>
      </main>
    </>
  );
};

export default Home;
