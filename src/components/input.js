import styles from '@/components/input.module.css';
import emailIcon from '@/imgs/assets/mail.png';
import lockIcon from '@/imgs/assets/lock.png';
import Image from 'next/image';

export default function Input({ type = 'text', placeholder, label, icon, value, onChange }) {
    const getIcon = () => {
        switch (icon) {
            case 'email':
                return emailIcon;
            case 'password':
                return lockIcon;
            default:
                return emailIcon;
        }
    };

    return (
        <div>
            <label className={styles.label}>{label}</label>
            <div className={styles.inputContainer}>
                <input type={type} className={styles.input} placeholder={placeholder} value={value} onChange={onChange} />
                {icon && (
                    <div className={styles.icon}>
                        <Image alt='icon' src={getIcon()} height={16} width={16} />
                    </div>
                )}
            </div>
        </div>
    );
}
