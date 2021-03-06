import Image from "next/image";

import styles from "./styles.module.scss";

interface CardProps {
  name: string;
  link: string;
  image: string;
  altImage: string;
}

const Card = ({ name, link, image, altImage }: CardProps) => {
  return (
    <a className={styles.card} href={link} target="_blank" rel="noreferrer">
      <Image
        height="318px"
        width="318px"
        objectFit="contain"
        src={image}
        alt={altImage}
      />
      <div className={styles.title}>{name}</div>
    </a>
  );
};

export default Card;
