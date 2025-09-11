import styles from "./CSSModules.module.css";

function CSSModules() {
  return (
    <div id={styles.container}>
      <hr />
      <h4 id={styles.heading}>CSSModules Component</h4>
      <p id={styles.para}>
        This is written using css modules styling imported to its specific
        component.
      </p>
      <hr />
    </div>
  );
}

export default CSSModules;
