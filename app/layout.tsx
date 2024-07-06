import './globals.css';
import { Inter, Atkinson_Hyperlegible } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ActiveSectionContextProvider from '@/context/ActiveSectionContext';
import ThemeToggle from '@/components/ThemeToggle';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  icons: {
    icon: '/icon.svg',
  },
  title: 'Anne | Portfolio',
  description:
    'React Developer. Portfolio built with Next.js, Typescript, TailwindCSS & FramerMotion, to showcase some of my projects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-[#fff7f3] dark:bg-[#0F172A] text-gray-900  dark:text-gray-50 dark:text-opacity-80 relative pt-28 sm:pt-36`}
      >
        <div className='bg-[#fde0c4] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#945263]'></div>
        <div className='bg-[#bde2f7] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
        <ActiveSectionContextProvider>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
          <Toaster position='top-right' />
        </ActiveSectionContextProvider>
        <ThemeToggle />
      </body>
    </html>
  );
}
