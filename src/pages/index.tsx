import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { SiTypescript, SiJavascript, SiReact, SiFlutter } from "react-icons/si";

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
            height={200}
            width={200}
            objectFit="cover"
            src="https://github.com/gabriel11447.png"
            alt="gabriel11447"
            className={styles.photo}
          />
          <div className={styles.description}>
            <h1>Gabriel de Carvalho</h1>
            <span>
              I am a Computer Science undergraduate student at UNESP and React
              Native developer.
            </span>
          </div>
        </section>
        <section className={styles.skills}>
          <h1>Skills</h1>
          <span className={styles.skillList}>
            <div className={styles.skill}>
              <SiReact size={48} />
            </div>
            <div className={styles.skill}>
              <SiTypescript size={48} />
            </div>
            <div className={styles.skill}>
              <SiJavascript size={48} />
            </div>
            <div className={styles.skill}>
              <SiFlutter size={48} />
            </div>
          </span>
        </section>
        <section className={styles.projects}>
          <h1>Projects</h1>
          <span className={styles.projectContainer}>
            <a
              className={styles.card}
              href="https://play.google.com/store/apps/details?id=com.oraculolol"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                height="318px"
                width="318px"
                objectFit="contain"
                src="/images/oraculo.svg"
                alt="oráculo"
              />
            </a>
            <a
              className={styles.card}
              href="https://pcg-pokedex.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                height="318px"
                width="318px"
                objectFit="contain"
                src="/images/pokedex.png"
                alt="pokedéx"
              />
            </a>
            <a
              className={styles.card}
              href="https://github.com/gabriel11447/dev_quiz"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                height="318px"
                width="318px"
                objectFit="contain"
                src="/images/devquiz.png"
                alt="dev quiz"
              />
            </a>
          </span>
        </section>
      </main>
    </>
  );
};

export default Home;
