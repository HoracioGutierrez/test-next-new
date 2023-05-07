type Props = {
  children: React.ReactNode
}

export default function LandingLayout({ children }: Props) {
  return (
    <main className="p-4 flex-grow flex flex-col justify-center items-center">
      {children}
    </main>
  )
}