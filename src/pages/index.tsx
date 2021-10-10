import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { SiTypescript, SiJavascript, SiReact, SiFlutter } from "react-icons/si";
import Card from "../components/Card";

import styles from "./home.module.scss";

const DESCRIPTIONS = [
  {
    name: "React",
    description: "3 years of experience, currently working with React Native.",
  },
  { name: "TypeScript", description: "2 years of experience." },
  { name: "JavaScript", description: "3 years of experience." },
  {
    name: "Flutter",
    description:
      "6 months of experience, trying to use more for personal projects.",
  },
];

const Home: NextPage = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [skillIndex, setSkillIndex] = useState(-1);
  const [description, setDescription] = useState("");

  const handleShowDescription = (index: number) => {
    if (showDescription && skillIndex === index) {
      setShowDescription(false);
      setSkillIndex(-1);
    } else {
      setShowDescription(true);
      setDescription(DESCRIPTIONS[index].description);
      setSkillIndex(index);
    }
  };

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
          <div className={styles.skillList}>
            <a
              className={skillIndex === 0 ? styles.activeSkill : styles.skill}
              onClick={() => handleShowDescription(0)}
            >
              <SiReact size={48} />
            </a>
            <a
              className={skillIndex === 1 ? styles.activeSkill : styles.skill}
              onClick={() => handleShowDescription(1)}
            >
              <SiTypescript size={48} />
            </a>
            <a
              className={skillIndex === 2 ? styles.activeSkill : styles.skill}
              onClick={() => handleShowDescription(2)}
            >
              <SiJavascript size={48} />
            </a>
            <a
              className={skillIndex === 3 ? styles.activeSkill : styles.skill}
              onClick={() => handleShowDescription(3)}
            >
              <SiFlutter size={48} />
            </a>
          </div>
          {showDescription && (
            <div className={styles.skillDescription}>{description}</div>
          )}
        </section>
        <section className={styles.projects}>
          <h1>Projects</h1>
          <span className={styles.projectContainer}>
            <Card
              name="Oráculo"
              link="https://play.google.com/store/apps/details?id=com.oraculolol"
              image="/images/oraculo.svg"
              altImage="oráculo"
            />
            <Card
              name="Pokédex"
              link="https://pcg-pokedex.netlify.app/"
              image="/images/pokedex.png"
              altImage="pokédex"
            />
            <Card
              name="dev.quiz"
              link="https://github.com/gabriel11447/dev_quiz"
              image="/images/devquiz.png"
              altImage="dev quiz"
            />
            <Card
              name="RentX"
              link="https://github.com/gabriel11447/rentx"
              image="/images/rentx.png"
              altImage="rentx"
            />
          </span>
        </section>
      </main>
    </>
  );
};

export default Home;
