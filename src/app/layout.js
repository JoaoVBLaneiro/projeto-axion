import '@/styles/globals.css';

export const metadata = {
  title: "ORANGE Listing",
  description: "List of Things powered by Axion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}