import { Metadata } from 'next';
import '../globals.css'
import { Inter } from 'next/font/google'
import PagesLayout from '../(components)/PagesLayout'

export const metadata: Metadata = {
  title: {
    default: 'HG | Portfolio',
    template : 'HG | %s',
  },
};


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  content,
  sidebar
}: {
  content: React.ReactNode,
  sidebar: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <PagesLayout sidebar={sidebar} content={content}/>
      </body>
    </html>
  )
}
