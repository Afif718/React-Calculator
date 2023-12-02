import styles from "./DisplayResult.module.css";

const DisplayResult = ({ calValue }) => {
  return (
    <>
      <input className={styles.display} type="text" value={calValue} readOnly />
    </>
  );
};

export default DisplayResult;
