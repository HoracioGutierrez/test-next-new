
import Header from "./(components)/layout/Header"
import "./globals.css"

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html className='bg-dark'>
      <body>
        <Header/>
        <main className='p-16'>
          {children}
        </main>
      </body>
    </html>
  )
}