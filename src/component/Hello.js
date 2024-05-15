import World from "./World";
import styles from "./Hello.module.css";
export default function Hello() {
  return (
    <div>
      <p>
        Hello <World />
        <div className={styles.box}>app</div>
      </p>
    </div>
  );
}
