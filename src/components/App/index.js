import React, { useEffect } from "react";
import styles from "./styles.scss";
import worm from "./worm.svg";

export default props => {
  const init = async () => {};

  useEffect(() => {
    init();
  }, []);

  return (
    <div className={styles.root}>
      <p>I would be happier if I had more free time.</p>
    </div>
  );
};
