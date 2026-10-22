import './globals.css';

export const metadata = {
  title: 'Scanzaa — Guest Dining Portal',
  description: 'Digital restaurant menu and dining hub powered by Scanzaa.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FFFCF7] sm:bg-[#F6F3EC] text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}
