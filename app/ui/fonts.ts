import { Inter, Lusitana, Noto_Sans_KR, Oleo_Script } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['700', '400'],
});
export const oelo = Oleo_Script({ weight: ['400', '700'], subsets: ['latin'] });
export const noto = Noto_Sans_KR({ preload: false });
