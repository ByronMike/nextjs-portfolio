import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Michael Auger - Frontend Developer - Next, React, Tailwind, Node.js',
  description: 'Portfolio de Michael Auger',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Recommended by the next-theme official docs (only applied one level deep, so it won't block hydration warnings on other elements)
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon/logo.svg" type="svg" sizes="any" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className={`flex flex-col justify-center ${inter.className}`}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
