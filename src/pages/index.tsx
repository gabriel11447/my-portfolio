import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { SiTypescript, SiJavascript, SiReact, SiFlutter } from "react-icons/si";
import Card from "../components/Card";

import styles from "./home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>gabriel11447</title>
      </Head>
      <main>
        <section className={styles.about}>
          <div className={styles.photo}>
            <Image
              height={200}
              width={200}
              layout="responsive"
              objectFit="cover"
              src="/images/photo.jfif"
              alt="gabriel11447"
            />
          </div>
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
            <Card
              link="https://play.google.com/store/apps/details?id=com.oraculolol"
              image="/images/oraculo.svg"
              altImage="oráculo"
            />
            <Card
              link="https://pcg-pokedex.netlify.app/"
              image="/images/pokedex.png"
              altImage="pokedéx"
            />
            <Card
              link="https://github.com/gabriel11447/dev_quiz"
              image="/images/devquiz.png"
              altImage="dev quiz"
            />
          </span>
        </section>
      </main>
    </>
  );
};

export default Home;
