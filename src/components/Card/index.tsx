import Image from "next/image";

import styles from "./styles.module.scss";

const Card = ({ link, image, altImage }) => {
  return (
    <a className={styles.card} href={link} target="_blank" rel="noreferrer">
      <Image
        height="318px"
        width="318px"
        objectFit="contain"
        src={image}
        alt={altImage}
      />
    </a>
  );
};

export default Card;
