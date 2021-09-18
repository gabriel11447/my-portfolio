import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
          height="100%"
          width="100%"
          src="/images/logo.svg"
          alt="gabriel11447"
        />
        <nav>
          <a
            href="https://github.com/gabriel11447"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/gabriel11447"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={28} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
