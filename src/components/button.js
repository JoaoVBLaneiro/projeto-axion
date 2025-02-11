'use client';

import styles from '@/components/button.module.css';

export default function Button({ text, onClick, className }) {
    return (
        <>
            <button className={`${styles.button} ${className}`} onClick={onClick}>{text}</button>
        </>
    );
}