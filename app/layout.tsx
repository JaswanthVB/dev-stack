


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
  title: 'School Portal',
  description: 'Welcome to the School Portal for managing students and staff efficiently.',
};