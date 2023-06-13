import Header from './(components)/Header'
import "./globals.css"

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html className='bg-[#030303]'>
      <body>
        <Header/>
        <main className='px-16'>
          {children}
        </main>
      </body>
    </html>
  )
}