import Link from "next/link"
import NavigationBar from "./NavigationBar"

type Props = {
  isPage?: boolean
}

export default function Header({ isPage }: Props) {
  return (
    <header className={`flex justify-between items-center h-16 ${isPage ? "bg-gray-900 shadow-[0_0_10px_rgba(0,0,0,0.5)] text-white z-50" : "bg-white "}  px-4 py-2`}>
      <h1 className="font-bold">Horacio Gutierrez</h1>
      <NavigationBar isPage={isPage}/>
    </header>
  )
}