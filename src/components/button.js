'use client';

import styles from '@/styles/button.css';

export default function Button({ text, onClick, className }) {
    return (
        <>
            <button className={`${styles.button} ${className}`} onClick={onClick}>{text}</button>
        </>
    );
}