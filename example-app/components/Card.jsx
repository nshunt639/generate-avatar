import React, { useState } from "react";
import styles from "./card.module.css";
import { generateFromString } from "generate-avatar";
import { v4 } from "uuid";

function Card() {
  const [usedUUID, setUsedUUID] = useState(v4());

  const renderNewImage = () => {
    setUsedUUID(v4());
  };

  const inputChange = (e) => {
    setUsedUUID(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Generate Avatar</span>
      <span className={styles.subTitle}>
        Generate any avatar with any string, which is 100% reproducable and
        fingerprinted.
      </span>
      <input
        className={styles.valueInput}
        value={usedUUID}
        onChange={inputChange}
      />
      <span className={styles.subTitle}>
        Generate an image from a random uuid
      </span>
      <button onClick={renderNewImage} className={styles.newButton}>
        Generate a random uuid
      </button>
      <div className={styles.card}>
        <img src={`data:image/svg+xml;utf8,${generateFromString(usedUUID)}`} />
      </div>
    </div>
  );
}

export default Card;
