import styles from '@/components/heading.module.css';

export default function Heading({ category }) {
    return (
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>List of {category}</h1>
        <div className={styles.line}></div>
      </div>
    );
}
