import React from "react";
import styles from "./Card.module.css";

const Card = ({ data }) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardHead}>
        <h2 className={styles.cardHeadTitle}>
          <a href="#">{data.title}</a>
        </h2>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardHeadDescr}>{data.desc}</p>
        <p className={styles.cardHeadDescr}>{data.author}</p>
      </div>
    </article>
  );
};

export default Card;
