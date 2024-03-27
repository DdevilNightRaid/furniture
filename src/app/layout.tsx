import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TMONR | Best Furniture in Pokhara',
  description: 'Looking for a top-notch web development company in Pokhara? Look no further than TheMisFitOfNightRaid. From cybersecurity to web development and 3D development, we offer the services you need to create a standout website for your brand. Join our cybersecurity and web development classes in Pokhara, or participate in our online classes from anywhere.',
  // icons: {
  //   icon: '/themisfitofnightraid_nobg.png',
  //   shortcut: '/favicon-32x32.png',
  //   apple: '/apple-touch-icon.png'
  // },
  // other: {
  //   'twitter-image': 'https://i.ibb.co/Pzm1Rgh/thumbnail.png',
  //   'twitter-card': 'summary_large_image',
  //   'og:url': 'themisfitofnightraid.com',
  //   'og:image': 'https://i.ibb.co/Pzm1Rgh/thumbnail.png',
  //   'og:type': 'website',

  // }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
