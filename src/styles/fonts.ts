import { Inter, Nunito } from 'next/font/google';
import localFont from 'next/font/local';

// Define Louize font (local)
export const louize = localFont({
  src: [
    {
      path: '../../public/fonts/Louize-Regular-205TF.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Louize-Medium-205TF.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Louize-Bold-205TF.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Louize-Italic-205TF.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-louize',
  display: 'swap',
});

// Inter font (Google)
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Nunito font (Google)
export const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-nunito',
});
