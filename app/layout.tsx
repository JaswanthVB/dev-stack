import './globals.css';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor'; // Ensure this file exists in components/

export const metadata = {
  title: 'Vault.sys | Systems Architecture',
  description: 'High-integrity software ecosystems and industrial hardware telemetry by Jaswanth Varma Bolisetty.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B121E] antialiased overflow-x-hidden">
        <CustomCursor />
        
        <Navbar />
        
        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}