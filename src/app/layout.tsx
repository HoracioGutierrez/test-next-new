
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
        <main className='p-4 lg:p-16'>
          {children}
        </main>
      </body>
    </html>
  )
}