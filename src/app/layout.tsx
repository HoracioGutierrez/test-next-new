
import { Metadata } from "next"
import Header from "./(components)/layout/Header"
import "./globals.css"

export const metadata: Metadata = {
  title: 'HG - Portfolio'
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html className='bg-dark'>
      <body>
        <Header/>
        <main className='px-4 lg:px-16 pt-[72px] lg:!pt-[90px]'>
          {children}
        </main>
      </body>
    </html>
  )
}