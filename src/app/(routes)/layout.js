'use client';

import Header from "@/components/header.js";
import styles from '@/app/(routes)/layout.module.css';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { isAuthenticated } from "@/middleware/auth";

export default function RootLayout({ children }) {
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/');
        }
    }, [router]);

    return (
        <>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
        </>
    );
}