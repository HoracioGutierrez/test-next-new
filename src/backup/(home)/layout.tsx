import { Metadata } from 'next';
import '../globals.css'
import { Inter } from 'next/font/google'
//import LandingLayout from '../(components)/LandingLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HG | Portfolio'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <LandingLayout>
          {children}
        </LandingLayout> */}
      </body>
    </html>
  )
}
