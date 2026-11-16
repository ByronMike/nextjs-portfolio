import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeProvider from '@/components/providers/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Michaël Auger — Product Engineer Fullstack (Freelance)',
  description:
    'Product Engineer fullstack freelance : marketplaces, paiements et outils internes en Next.js, Node.js et PostgreSQL. En full remote, partout dans le monde.',
  icons: {
    icon: '/favicon/logo.svg',
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
          <main
            className={`bg-dark-background flex flex-col justify-center ${inter.className}`}
          >
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
