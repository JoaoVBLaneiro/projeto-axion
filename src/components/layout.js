import Link from 'next/link';

export default function Layout({ children }) {
    return (
      <div style={{ padding: 20 }}>
        <nav>
          <Link href="/">Home</Link> | <Link href="/sobre">Sobre</Link>
        </nav>
        <hr />
        {children}
      </div>
    );
  }
  