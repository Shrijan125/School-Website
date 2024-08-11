import { Work_Sans } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/TopBar/TopBar';

const worksans = Work_Sans({ subsets: ['latin'] });
export const metadata = {
  title: 'Akshar Vidya Griha',
  description: 'Website for Akshar Vidya Griha school.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={worksans.className}>
        <TopBar></TopBar>
        {children}
      </body>
    </html>
  );
}
