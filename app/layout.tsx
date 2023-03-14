import './globals.css';
import '../styles/global.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <div>Main layout</div>
      <body>{children}</body>
    </html>
  );
}
