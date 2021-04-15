import styles from "./Card.module.css";
import Heading from "./Heading";

function Card({ ...rest }) {
  return (
    <h1 className={styles.container}>
      <Heading {...rest} />
    </h1>
  );
}

export default Card;
