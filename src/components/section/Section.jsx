import styles from './Section.module.css'

export default function Section({ title, children }) {
  return (
    <>
      <h2 className={styles.titles}>{title}</h2>
      {children}
    </>
  );
}


