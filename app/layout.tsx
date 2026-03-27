import type { Metadata } from 'next';
import { Newsreader } from 'next/font/google';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ansh Tandon',
  description:
    'CS student at Purdue. Previously at Apple and Tesla. Interested in ML systems, distributed infrastructure, and AI agents.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={newsreader.variable}>
      <body>{children}</body>
    </html>
  );
}
