


import './globals.css';
import Navbar from './components/Navbar'; // Move up one level to find components

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
export const metadata = {
  title: 'Dev-Stack Vault',
  description: 'Welcome to the Dev-Stack Vault for managing development projects and resources efficiently.',
};