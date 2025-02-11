import Image from 'next/image';
import styles from '@/components/card.module.css';

export default function Card({ image, title }) {
    return (
        <div className={styles.card}>
            <div className={styles.gradient}></div>
            <Image src={image} alt="" className={styles.image} height={300} width={300} />
            <h2 className={styles.title}>{title}</h2>
        </div>
    );
}