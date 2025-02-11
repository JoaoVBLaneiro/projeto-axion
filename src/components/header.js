import styles from '@/components/header.module.css';
import Image from 'next/image';
import logo from '@/imgs/assets/logo.png';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.header}>
            <Image src={logo} alt="ORANGE" width={250} height={30} />
            <nav className={styles.navigation}>
                <ul className={styles.navLinks}>
                    <li>
                        <Link className={styles.navLink} href="/food">Foods</Link>
                    </li>
                    <li>
                        <Link className={styles.navLink} href="/person">People</Link>
                    </li>
                    <li>
                        <Link className={styles.navLink} href="/place">Places</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}